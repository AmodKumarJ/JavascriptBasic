const { NULL } = require("mysql/lib/protocol/constants/types");

(function(global){
    var ajaxUtils = {};

    function getRequestObeject(){
        if(window.XMLHttpRequest){
            return(new XMLHttpRequest());
        }
        else if(window.ActiveXObject){
            return(new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else{
            global.alert("Ajax is not supported");
            return (null);
        }
    }
})(window);