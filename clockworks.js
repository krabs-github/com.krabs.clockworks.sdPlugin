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
    // minute_large_digit1
    $SD.on('com.krabs.clockworks.minute_large_digit1.willAppear', jsonObj => minute_large_digit1.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.minute_large_digit1.didReceiveSettings', jsonObj => minute_large_digit1.onDidReceiveSettings(jsonObj));
    // minute_large_digit2
    $SD.on('com.krabs.clockworks.minute_large_digit2.willAppear', jsonObj => minute_large_digit2.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.minute_large_digit2.didReceiveSettings', jsonObj => minute_large_digit2.onDidReceiveSettings(jsonObj));
    // second_large_digit1
    $SD.on('com.krabs.clockworks.second_large_digit1.willAppear', jsonObj => second_large_digit1.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.second_large_digit1.didReceiveSettings', jsonObj => second_large_digit1.onDidReceiveSettings(jsonObj));
    // second_large_digit2
    $SD.on('com.krabs.clockworks.second_large_digit2.willAppear', jsonObj => second_large_digit2.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.second_large_digit2.didReceiveSettings', jsonObj => second_large_digit2.onDidReceiveSettings(jsonObj));

//------------------------------------------------------------------------------

    // Large ampm
    $SD.on('com.krabs.clockworks.large_ampm.willAppear', jsonObj => large_ampm.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.large_ampm.didReceiveSettings', jsonObj => large_ampm.onDidReceiveSettings(jsonObj));
    // Medium ampm
    $SD.on('com.krabs.clockworks.medium_ampm.willAppear', jsonObj => medium_ampm.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.medium_ampm.didReceiveSettings', jsonObj => medium_ampm.onDidReceiveSettings(jsonObj));
medium_ampm
//------------------------------------------------------------------------------

    // Large Seperator ( : )
    $SD.on('com.krabs.clockworks.large_seperator_colon.willAppear', jsonObj => large_seperator_colon.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.large_seperator_colon.didReceiveSettings', jsonObj => large_seperator_colon.onDidReceiveSettings(jsonObj));
    // Large Seperator ( - )
    $SD.on('com.krabs.clockworks.large_seperator_dash.willAppear', jsonObj => large_seperator_dash.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.large_seperator_dash.didReceiveSettings', jsonObj => large_seperator_dash.onDidReceiveSettings(jsonObj));
    // Large Seperator ( . )
    $SD.on('com.krabs.clockworks.large_seperator_dot.willAppear', jsonObj => large_seperator_dot.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.large_seperator_dot.didReceiveSettings', jsonObj => large_seperator_dot.onDidReceiveSettings(jsonObj));
    // Large Seperator ( / )
    $SD.on('com.krabs.clockworks.large_seperator_slash.willAppear', jsonObj => large_seperator_slash.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.large_seperator_slash.didReceiveSettings', jsonObj => large_seperator_slash.onDidReceiveSettings(jsonObj));
    // Medium Seperator ( : )
    $SD.on('com.krabs.clockworks.medium_seperator_colon.willAppear', jsonObj => medium_seperator_colon.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.medium_seperator_colon.didReceiveSettings', jsonObj => medium_seperator_colon.onDidReceiveSettings(jsonObj));
    // Medium Seperator ( - )
    $SD.on('com.krabs.clockworks.medium_seperator_dash.willAppear', jsonObj => medium_seperator_dash.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.medium_seperator_dash.didReceiveSettings', jsonObj => medium_seperator_dash.onDidReceiveSettings(jsonObj));
    // Medium Seperator ( . )
    $SD.on('com.krabs.clockworks.medium_seperator_dot.willAppear', jsonObj => medium_seperator_dot.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.medium_seperator_dot.didReceiveSettings', jsonObj => medium_seperator_dot.onDidReceiveSettings(jsonObj));
    // Medium Seperator ( / )
    $SD.on('com.krabs.clockworks.medium_seperator_slash.willAppear', jsonObj => medium_seperator_slash.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.medium_seperator_slash.didReceiveSettings', jsonObj => medium_seperator_slash.onDidReceiveSettings(jsonObj));

//------------------------------------------------------------------------------

    // hour12 medium
    $SD.on('com.krabs.clockworks.hour12_medium.willAppear', jsonObj => hour12_medium.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.hour12_medium.didReceiveSettings', jsonObj => hour12_medium.onDidReceiveSettings(jsonObj));
    // minute medium
    $SD.on('com.krabs.clockworks.minute_medium.willAppear', jsonObj => minute_medium.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.minute_medium.didReceiveSettings', jsonObj => minute_medium.onDidReceiveSettings(jsonObj));
    // seconds medium
    $SD.on('com.krabs.clockworks.seconds_medium.willAppear', jsonObj => seconds_medium.onWillAppear(jsonObj));
    $SD.on('com.krabs.clockworks.seconds_medium.didReceiveSettings', jsonObj => seconds_medium.onDidReceiveSettings(jsonObj));
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
seperator_large (:)

seperator_large (/)
seperator_large (.)
seperator_large (-)
blank_notext
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

        var vText = vHour12_large_digit1
        if (vText != '0') {
          let vTextPayload = {};
          vTextPayload.font = 'bold 72px Arial';
          vTextPayload.fillStyle  = '#ffffff';
          vTextPayload.x = 36;
          vTextPayload.y = 41;
          vTextPayload.textAlign = 'center';
          vTextPayload.textBaseline = 'middle';
          vTextPayload.backgroundColor = '#000000';
          vTextPayload.text = vText;

          vImageURL = "resources/images/transparent.png";
          Utils.getDataUri(vImageURL, function(base64Img){
          var vImageBase64 = base64Img;
          $SD.api.setImage(jsn.context, vImageBase64);
        }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
          // inCanvas, inFillcolor, vOverlay, vFilter, vText
          //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit1)
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

      var vText = vHour12_large_digit2
      let vTextPayload = {};
      vTextPayload.font = 'bold 72px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 41;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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
      //console.log(hour24_large_digit1)
      hour24_large_digit1 = '0' + hour24_large_digit1
      hour24_large_digit1 = hour24_large_digit1.slice(-2).charAt(0)

      var vText = hour24_large_digit1
      if (vText != '0') {
        let vTextPayload = {};
        vTextPayload.font = 'bold 72px Arial';
        vTextPayload.fillStyle  = '#ffffff';
        vTextPayload.x = 36;
        vTextPayload.y = 41;
        vTextPayload.textAlign = 'center';
        vTextPayload.textBaseline = 'middle';
        vTextPayload.backgroundColor = '#000000';
        vTextPayload.text = vText;

        vImageURL = "resources/images/transparent.png";
        Utils.getDataUri(vImageURL, function(base64Img){
        var vImageBase64 = base64Img;
        $SD.api.setImage(jsn.context, vImageBase64);
      }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit1)
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

      var vText = hour24_large_digit2
      let vTextPayload = {};
      vTextPayload.font = 'bold 72px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 41;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

const minute_large_digit1 = {
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
      var minute_large_digit1 = vDate_Now.toLocaleString([navigator.language], { minute: '2-digit' })
      minute_large_digit1 = '0' + minute_large_digit1
      minute_large_digit1 = minute_large_digit1.slice(-2).charAt(0)

      var vText = minute_large_digit1
      let vTextPayload = {};
      vTextPayload.font = 'bold 72px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 41;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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

const minute_large_digit2 = {
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
      var minute_large_digit2 = vDate_Now.toLocaleString([navigator.language], { minute: '2-digit' })
      minute_large_digit2 = '0' + minute_large_digit2
      minute_large_digit2 = minute_large_digit2.slice(-2).charAt(1)

      var vText = minute_large_digit2
      let vTextPayload = {};
      vTextPayload.font = 'bold 72px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 41;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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

const second_large_digit1 = {
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
      var second_large_digit1 = vDate_Now.toLocaleString([navigator.language], { second: '2-digit' })
      second_large_digit1 = '0' + second_large_digit1
      second_large_digit1 = second_large_digit1.slice(-2).charAt(0)

      var vText = second_large_digit1
      let vTextPayload = {};
      vTextPayload.font = 'bold 72px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 41;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';;
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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

const second_large_digit2 = {
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
      var second_large_digit2 = vDate_Now.toLocaleString([navigator.language], { second: '2-digit' })
      second_large_digit2 = '0' + second_large_digit2
      second_large_digit2 = second_large_digit2.slice(-2).charAt(1)

      var vText = second_large_digit2
      let vTextPayload = {};
      vTextPayload.font = 'bold 72px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 41;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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

//------------------------------------------------------------------------------

const large_ampm = {
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
      var large_ampm = vDate_Now.toLocaleString([navigator.language], { hour: 'numeric', hour12: true }).split(/\s(.+)/)[1];

      var vText = large_ampm
      let vTextPayload = {};
      vTextPayload.font = 'bold 36px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 72;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'bottom';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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

const medium_ampm = {
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
      var medium_ampm = vDate_Now.toLocaleString([navigator.language], { hour: 'numeric', hour12: true }).split(/\s(.+)/)[1];

      var vText = medium_ampm
      let vTextPayload = {};
      vTextPayload.font = 'bold 28px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 60;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'bottom';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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

//------------------------------------------------------------------------------

const large_seperator_colon = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vText = ':';
      let vTextPayload = {};
      vTextPayload.font = 'bold 48px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 36;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

const large_seperator_dash = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vText = '-';
      let vTextPayload = {};
      vTextPayload.font = 'bold 48px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 36;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

const large_seperator_dot = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vText = '.';
      let vTextPayload = {};
      vTextPayload.font = 'bold 48px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 48;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

const large_seperator_slash = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vText = '/';
      let vTextPayload = {};
      vTextPayload.font = 'bold 48px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 36;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

const medium_seperator_colon = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vText = ':';
      let vTextPayload = {};
      vTextPayload.font = 'bold 30px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 36;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

const medium_seperator_dash = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vText = '-';
      let vTextPayload = {};
      vTextPayload.font = 'bold 30px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 36;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

const medium_seperator_dot = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vText = '.';
      let vTextPayload = {};
      vTextPayload.font = 'bold 30px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 48;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

const medium_seperator_slash = {
  settings:{},
  onDidReceiveSettings: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
  },

  onWillAppear: function(jsn) {
    this.settings[jsn.context] = Utils.getProp(jsn, 'payload.settings', {});
    var vKrabs_JSONContext = jsn.context;
    function UpdateTime() {
      var vText = '/';
      let vTextPayload = {};
      vTextPayload.font = 'bold 30px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 36;
      vTextPayload.y = 36;
      vTextPayload.textAlign = 'center';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText

        //$SD.api.setTitle(vKrabs_JSONContext, hour24_large_digit2)
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

//------------------------------------------------------------------------------

const hour12_medium = {
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
        var hour12_medium = vDate_Now.toLocaleString([navigator.language], { hour: 'numeric', hour12: true }).split(/\s(.+)/)[0];

        var vText = hour12_medium
        let vTextPayload = {};
        vTextPayload.font = 'bold 48px Arial';
        vTextPayload.fillStyle  = '#ffffff';
        vTextPayload.x = 64;
        vTextPayload.y = 41;
        vTextPayload.textAlign = 'right';
        vTextPayload.textBaseline = 'middle';
        vTextPayload.backgroundColor = '#000000';
        vTextPayload.text = vText;

        vImageURL = "resources/images/transparent.png";
        Utils.getDataUri(vImageURL, function(base64Img){
        var vImageBase64 = base64Img;
        $SD.api.setImage(jsn.context, vImageBase64);
      }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
        // inCanvas, inFillcolor, vOverlay, vFilter, vText
        //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit1)
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

const minute_medium = {
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
      var minute_medium = vDate_Now.toLocaleString([navigator.language], { minute: '2-digit' })
      minute_medium = '0' + minute_medium
      minute_medium = minute_medium.slice(-2)

      var vText = minute_medium
      let vTextPayload = {};
      vTextPayload.font = 'bold 48px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 8;
      vTextPayload.y = 41;
      vTextPayload.textAlign = 'left';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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

const seconds_medium = {
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
      var seconds_medium = vDate_Now.toLocaleString([navigator.language], { second: '2-digit' })
      seconds_medium = '0' + seconds_medium
      seconds_medium = seconds_medium.slice(-2)

      var vText = seconds_medium
      let vTextPayload = {};
      vTextPayload.font = 'bold 48px Arial';
      vTextPayload.fillStyle  = '#ffffff';
      vTextPayload.x = 8;
      vTextPayload.y = 41;
      vTextPayload.textAlign = 'left';
      vTextPayload.textBaseline = 'middle';
      vTextPayload.backgroundColor = '#000000';
      vTextPayload.text = vText;

      vImageURL = "resources/images/transparent.png";
      Utils.getDataUri(vImageURL, function(base64Img){
      var vImageBase64 = base64Img;
      $SD.api.setImage(jsn.context, vImageBase64);
    }, undefined, vTextPayload.backgroundColor, undefined, undefined, vTextPayload);
      // inCanvas, inFillcolor, vOverlay, vFilter, vText
      //$SD.api.setTitle(vKrabs_JSONContext, vHour12_large_digit2)
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
