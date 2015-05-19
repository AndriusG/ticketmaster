/**********************************
Dropdown stlye
**********************************/

$('.dropdown-head').hover(
    function(){
        $(this).children('.dropdown-items').stop().slideDown(150);
    },
    function(){
        $(this).children('.dropdown-items').stop().slideUp(150);
    }
);

/**********************************
Functions
**********************************/

/**********************************
1. Template variables
**********************************/

var emptyCapture = ("Additional User Information \n•\tAre they remote/alternate location (Y/N) N \no\tPhone Number: \no\tPhysical Location: \n \nMachine/Equipment related: \n•\tWindows XP, Windows 7, other: Windows 7\n•\tDesktop or Laptop: \n \nLegacy Org: \nL-Aon / L-Hewitt \n  \nISSUE DESCRIPTION:  \n•\tApplication/System: \n•\tUser ID used to access system: \n•\tWhen did this issue start? Today \n•\tWhen (or has) this action been successful in the past? Yes \n•\tHave there been any recent changes to the PC and/or Software? No\n•\tHow many users are affected? 1 \n•\tIs there any Client impact ? No \no\tIf yes, list Client(s) impacted: \no\tIs the caller part of a call center? \n \nFull Error message/Situation details: \n  \nISSUE TROUBLESHOOTING: \n•\tThe following actions were performed with the end-user: \n•\t");

var workstationCapture = ("Additional User Information \n•\tAre they remote/alternate location (Y/N) N \no	Phone Number: \no	Physical Location: \n \nMachine/Equipment related: \n•	Windows XP, Windows 7, other: Windows 7\n•\tDesktop or Laptop: \n \nLegacy Org: \nL-Aon / L-Hewitt \n  \nISSUE DESCRIPTION:  \n•\tApplication/System: Workstation \n•	User ID used to access system: \n•\tWhen did this issue start? Today \n•\tWhen (or has) this action been successful in the past? Yes \n•\tHave there been any recent changes to the PC and/or Software? No\n•\tHow many users are affected? 1 \n•\tIs there any Client impact ? No \n \nFull Error message/Situation details: User is locked out of the system \n  \nISSUE TROUBLESHOOTING: \n•\tThe following actions were performed with the end-user: \n•\tFound user in oneIdentity\n•\tChallenge questions answered correctly \n•\tReset password in oneIdentity\n•\tUser is able to log in but gets Windows Security pop-ups in Outlook\n•\tDeleted credentials in credential manager\n•\tCleared cache/temp files in Internet Options\n•\tUser restarted Outlook and logged in automatically\n•\tFirst contact resolution");

var bitlockerCapture = ("Additional User Information \n•\tAre they remote/alternate location (Y/N)  \no\tPhone Number:  \no\tPhysical Location: \n  \nMachine/Equipment related: \n•\tWindows XP, Windows 7, other: Windows 7\n•\tDesktop or Laptop: Laptop\n  \nLegacy Org\nL-Aon / L-Hewitt\n  \nISSUE DESCRIPTION:\n•\tApplication/System: BitLocker\n•\tUser ID used to access system as applicable: \n•\tWhen did this issue start? Today\n•\tWhen (or has) this action been successful in the past? Yes\n•\tHave there been any recent changes to the PC and/or Software? No\n•\tHow many users are affected? 1\n•\tIs there any Client impact ? No\n  \nFull Error message/Situation details: User needs a BitLocker recovery key \n  \nISSUE TROUBLESHOOTING:  \n•\tThe following actions were performed with the end user:\n•\tAsked user security questions - answered correctly\n•\tProvided user with recovery key\n•\tUser is able to log in\n•\tAdvised user to reset PIN\n•\tFirst contact resolution");

var as400Capture =  ("Additional User Information \n•\tAre they remote/alternate location (Y/N) N \no\tPhone Number: \no\tPhysical Location: \n \nMachine/Equipment related: \n•\tWindows XP, Windows 7, other: Windows 7\n•\tDesktop or Laptop: \n \nLegacy Org: \nL-Aon / L-Hewitt \n  \nISSUE DESCRIPTION:  \n•\tApplication/System: AS400 \n•\tUser ID used to access system: \n•\tWhen did this issue start? Today \n•\tWhen (or has) this action been successful in the past? Yes \n•\tHave there been any recent changes to the PC and/or Software? No\n•\tHow many users are affected? 1 \n•\tIs there any Client impact ? No \n \nFull Error message/Situation details: User is locked out of AS400 \n  \nISSUE TROUBLESHOOTING: \n•\tThe following actions were performed with the end-user: \n•\tFound user in oneIdentity\n•\tChallenge questions answered correctly \n•\tReset password in AS400\n•\tFirst contact resolution");

var imagingCapture =  ("Additional User Information \n•\tAre they remote/alternate location (Y/N) N \no\tPhone Number: \no\tPhysical Location: \n \nMachine/Equipment related: \n•\tWindows XP, Windows 7, other: Windows 7\n•\tDesktop or Laptop: \n \nLegacy Org: \nL-Aon / L-Hewitt \n  \nISSUE DESCRIPTION:  \n•\tApplication/System: Imaging \n•\tUser ID used to access system: \n•\tWhen did this issue start? Today \n•\tWhen (or has) this action been successful in the past? Yes \n•\tHave there been any recent changes to the PC and/or Software? No\n•\tHow many users are affected? 1 \n•\tIs there any Client impact ? No \n \nFull Error message/Situation details: User is locked out of Imaging \n  \nISSUE TROUBLESHOOTING: \n•\tThe following actions were performed with the end-user: \n•\tFound user in oneIdentity\n•\tChallenge questions answered correctly \n•\tReset password in Content Manager admin console\n•\tFirst contact resolution");

var goodappCapture =  ("Additional User Information \n•\tAre they remote/alternate location (Y/N) N \no\tPhone Number: \no\tPhysical Location: \n \nMachine/Equipment related: \n•\tWindows XP, Windows 7, other: Windows 7\n•\tDesktop or Laptop: \n \nLegacy Org: \nL-Aon / L-Hewitt \n  \nISSUE DESCRIPTION:  \n•\tApplication/System: GoodApp \n•\tUser ID used to access system: \n•\tWhen did this issue start? Today \n•\tWhen (or has) this action been successful in the past? Yes \n•\tHave there been any recent changes to the PC and/or Software? No\n•\tHow many users are affected? 1 \n•\tIs there any Client impact ? No \n \nFull Error message/Situation details: User needs a new OTA PIN \n  \nISSUE TROUBLESHOOTING: \n•\tThe following actions were performed with the end-user: \n•\tFound user in oneIdentity\n•\tChallenge questions answered correctly \n•\tRegenerated OTA PIN in Good App admin console\n•\tFirst contact resolution");

var certificateCapture =  ("Additional User Information \n•\tAre they remote/alternate location (Y/N) N \no\tPhone Number: \no\tPhysical Location: \n \nMachine/Equipment related: \n•\tWindows XP, Windows 7, other: Windows 7\n•\tDesktop or Laptop: \n \nLegacy Org: \nL-Aon / L-Hewitt \n  \nISSUE DESCRIPTION:  \n•\tApplication/System: VPN Certificate \n•\tUser ID used to access system: \n•\tWhen did this issue start? Today \n•\tWhen (or has) this action been successful in the past? Yes \n•\tHave there been any recent changes to the PC and/or Software? No\n•\tHow many users are affected? 1 \n•\tIs there any Client impact ? No \n \nFull Error message/Situation details: User has forgotten the password to renew VPN certificate \n  \nISSUE TROUBLESHOOTING: \n•\tThe following actions were performed with the end-user: \n•\tFound user in oneIdentity\n•\tChallenge questions answered correctly \n•\tGot colleague to reset certificate password and email it to the user\n•\tFirst contact resolution");

var lyncQuicktext = ('•\tConnected to the user for a screenshare using Lync');

var bomgarQuicktext = ('•\tConnected to the user for a screenshare using Bomgar');

var correctQuestionsQuicktext = ('•\tFound user in oneID and asked security questions - answered correctly');

var incorrectQuestionsQuicktext = ('•\tUser has no security questions set up, so emailed password to manager');

/**********************************
2. Button functions
**********************************/

$('#SelectAllBtn').on('click', function() {
    $('#text-area').select();
});

$('#ClearBtn').on('click', function() {
    $('#text-area').val('');
});

$('#ResetWorkstationBtn').on('click', function() {
	var caretPos = document.getElementById("text-area").selectionStart;
	var textAreaTxt = $('#text-area').val();
	var txtToAdd = workstationCapture;
	$('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#ResetBitLockerBtn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = bitlockerCapture;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#ResetAS400Btn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = as400Capture;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#ResetImagingBtn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = imagingCapture;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#ResetGoodAppBtn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = goodappCapture;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#ResetCertificateBtn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = certificateCapture;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#LyncBtn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = lyncQuicktext;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#BomgarBtn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = bomgarQuicktext;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#QuestionsCorrectBtn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = correctQuestionsQuicktext;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});

$('#NoQuestionsBtn').on('click', function() {
    var caretPos = document.getElementById("text-area").selectionStart;
    var textAreaTxt = $('#text-area').val();
    var txtToAdd = incorrectQuestionsQuicktext;
    $('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});


/**********************************
Insert empty capture
**********************************/

$("#text-area").val(emptyCapture);