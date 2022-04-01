$SD.on('connected', (jsonObj) => connected(jsonObj));
function connected(jsn) {
    /** subscribe to the willAppear and other events */
    // hour12_large_digit1
    $SD.on('com.krabs.clockworks.hour12_large_digit1.willAppear', jsonObj => hour12_large_digit1.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.hour12_large_digit1.didReceiveSettings', jsonObj => hour12_large_digit1.onDidReceiveSettings(jsonObj));
    // hour12_large_digit2
    $SD.on('com.krabs.clockworks.hour12_large_digit2.willAppear', jsonObj => hour12_large_digit2.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.hour12_large_digit2.didReceiveSettings', jsonObj => hour12_large_digit2.onDidReceiveSettings(jsonObj));
    // hour24_large_digit1
    $SD.on('com.krabs.clockworks.hour24_large_digit1.willAppear', jsonObj => hour24_large_digit1.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.hour24_large_digit1.didReceiveSettings', jsonObj => hour24_large_digit1.onDidReceiveSettings(jsonObj));
    // hour24_large_digit2
    $SD.on('com.krabs.clockworks.hour24_large_digit2.willAppear', jsonObj => hour24_large_digit2.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.hour24_large_digit2.didReceiveSettings', jsonObj => hour24_large_digit2.onDidReceiveSettings(jsonObj));
};

/* ACTIONS */
/*
Action List:
(Large = one digit per button)
(Medium = 2 digits per button)
hour12_large_digit1
hour12_large_digit2
hour24_large_digit1
hour24_large_digit2
minute_large_digit1
minute_large_digit2
second_large_digit1
second_large_digit2
ampm_medium (am or pm)
hour12_medium (1 or 2 digit)
hour24_medium (2 digit)
minute_medium (2 digit)
second_medium (2 digit)
month_medium_number (1 or 2 digit)
month_medium_short (Jan, Feb, Mar, etc)
month_medium_long (January, February, March, etc)
day_name_medium_short (Mon, Tue, Wed, etc)
day_name_medium_long (Monday, Tuesday, Wednesday, etc)
day_medium_number (1 or 2 digits)
year_medium_short (2 digits)
year_medium_long (4 digits)
year_medium_long_first2digits (20)
year_medium_long_last2digits (22)
*/
var vKrabs_Intervals = {};
// hour12_large_digit1
const hour12_large_digit1 = {
    settings:{},
    onDidReceiveSettings: function(jsn) {
      this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
      var vKrabs_JSONContext = jsn.context;
    },

    onWillAppear: function(jsn) {
      this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
      var vKrabs_JSONContext = jsn.context;
      function UpdateTime() {
        var vDate_Now = new Date();
        var vHour12_large_digit1 = vDate_Now.toLocaleString([navigator.language], { hour: 'numeric', hour12: true }).split(/\s(.+)/)[0];
        vHour12_large_digit1 = '0' + vHour12_large_digit1
        vHour12_large_digit1 = vHour12_large_digit1.slice(-2).charAt(0)
        if (vHour12_large_digit1 != '0') {
          $SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit1)
        }
      };
      UpdateTime();
      let vKrabs_IntervalID = jsn.context;
      function startInterval(func, time) {
          vKrabs_Intervals[vKrabs_IntervalID] = setInterval(func, time);
      }
      function stopInterval() {
          clearInterval(vKrabs_Intervals[vKrabs_IntervalID]);
      }
      if (vKrabs_Intervals[vKrabs_IntervalID]) {
        stopInterval();
        startInterval(UpdateTime, 1000);
      } else {
        startInterval(UpdateTime, 1000);
      }
        //if (!this.settings) this.settings={};
      //  $SD.api.getSettings(jsn.context);
        /*if (this.settings[jsn.context].vTemplate_SelectedFile) {
          vImageURL = this.settings[jsn.context].vTemplate_SelectedFile;
        } else {*/
        //  vImageURL = "resources/images/Icon.png";
        //}
      //  Utils.getDataUri(vImageURL, function(base64Img){
        //var vImageBase64 = base64Img;
        //$SD.api.setImage(jsn.context, vImageBase64);
      //});
    },
};

const hour12_large_digit2 = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vDate_Now = new Date();
      var vHour12_large_digit2 = vDate_Now.toLocaleString([navigator.language], { hour: 'numeric', hour12: true }).split(/\s(.+)/)[0];
      vHour12_large_digit2 = '0' + vHour12_large_digit2
      vHour12_large_digit2 = vHour12_large_digit2.slice(-2).charAt(1)
      $SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
    };
    UpdateTime();
    let vKrabs_IntervalID = jsn.context;
    function startInterval(func, time) {
        vKrabs_Intervals[vKrabs_IntervalID] = setInterval(func, time);
    }
    function stopInterval() {
        clearInterval(vKrabs_Intervals[vKrabs_IntervalID]);
    }
    if (vKrabs_Intervals[vKrabs_IntervalID]) {
      stopInterval();
      startInterval(UpdateTime, 1000);
    } else {
      startInterval(UpdateTime, 1000);
    }
      //if (!this.settings) this.settings={};
    //  $SD.api.getSettings(jsn.context);
      /*if (this.settings[jsn.context].vTemplate_SelectedFile) {
        vImageURL = this.settings[jsn.context].vTemplate_SelectedFile;
      } else {*/
      //  vImageURL = "resources/images/Icon.png";
      //}
    //  Utils.getDataUri(vImageURL, function(base64Img){
      //var vImageBase64 = base64Img;
      //$SD.api.setImage(jsn.context, vImageBase64);
    //});
  },
};

const hour24_large_digit1 = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vDate_Now = new Date();
      var hour24_large_digit1 = vDate_Now.toLocaleString([navigator.language], { hour: 'numeric', hour12: false }).split(/\s(.+)/)[0];
      console.log(hour24_large_digit1)
      hour24_large_digit1 = '0' + hour24_large_digit1
      hour24_large_digit1 = hour24_large_digit1.slice(-2).charAt(0)
      if (hour24_large_digit1 != '0') {
        $SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit1)
      }
    };
    UpdateTime();
    let vKrabs_IntervalID = jsn.context;
    function startInterval(func, time) {
        vKrabs_Intervals[vKrabs_IntervalID] = setInterval(func, time);
    }
    function stopInterval() {
        clearInterval(vKrabs_Intervals[vKrabs_IntervalID]);
    }
    if (vKrabs_Intervals[vKrabs_IntervalID]) {
      stopInterval();
      startInterval(UpdateTime, 1000);
    } else {
      startInterval(UpdateTime, 1000);
    }
      //if (!this.settings) this.settings={};
    //  $SD.api.getSettings(jsn.context);
      /*if (this.settings[jsn.context].vTemplate_SelectedFile) {
        vImageURL = this.settings[jsn.context].vTemplate_SelectedFile;
      } else {*/
      //  vImageURL = "resources/images/Icon.png";
      //}
    //  Utils.getDataUri(vImageURL, function(base64Img){
      //var vImageBase64 = base64Img;
      //$SD.api.setImage(jsn.context, vImageBase64);
    //});
  },
};

const hour24_large_digit2 = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vDate_Now = new Date();
      var hour24_large_digit2 = vDate_Now.toLocaleString([navigator.language], { hour: 'numeric', hour12: false }).split(/\s(.+)/)[0];
      hour24_large_digit2 = '0' + hour24_large_digit2
      hour24_large_digit2 = hour24_large_digit2.slice(-2).charAt(1)
      if (hour24_large_digit2 != '0') {
        $SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
      }
    };
    UpdateTime();
    let vKrabs_IntervalID = jsn.context;
    function startInterval(func, time) {
        vKrabs_Intervals[vKrabs_IntervalID] = setInterval(func, time);
    }
    function stopInterval() {
        clearInterval(vKrabs_Intervals[vKrabs_IntervalID]);
    }
    if (vKrabs_Intervals[vKrabs_IntervalID]) {
      stopInterval();
      startInterval(UpdateTime, 1000);
    } else {
      startInterval(UpdateTime, 1000);
    }
      //if (!this.settings) this.settings={};
    //  $SD.api.getSettings(jsn.context);
      /*if (this.settings[jsn.context].vTemplate_SelectedFile) {
        vImageURL = this.settings[jsn.context].vTemplate_SelectedFile;
      } else {*/
      //  vImageURL = "resources/images/Icon.png";
      //}
    //  Utils.getDataUri(vImageURL, function(base64Img){
      //var vImageBase64 = base64Img;
      //$SD.api.setImage(jsn.context, vImageBase64);
    //});
  },
};
