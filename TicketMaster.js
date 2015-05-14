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

/**********************************
1.1 Empty call capture
**********************************/

var emptyCapture = ("Additional User Information \n•	Are they remote/alternate location (Y/N) N \no	Phone Number: \no	Physical Location: \n \nMachine/Equipment related: \n•	Windows XP, Windows 7, other: Windows 7  \n•	Desktop or Laptop: \n \nLegacy Org: \nL-Aon / L-Hewitt \n  \nISSUE DESCRIPTION:  \n•	Application/System: Workstation \n•	User ID used to access system: \n•	When did this issue start? Today \n•	When (or has) this action been successful in the past? Yes \n•	Have there been any recent changes to the PC and/or Software? No\n•	How many users are affected? 1 \n•	Is there any Client impact ? No \n \nFull Error message/Situation details: User is locked out of the system \n  \nISSUE TROUBLESHOOTING: \n•	The following actions were performed with the end-user: \n•	Found user in oneIdentity\n•	Challenge questions answered correctly \n•	Reset password in oneIdentity\n• 	User is able to log in but gets Windows Security pop-ups\n• 	Deleted credentials in credential manager\n• 	Cleared cache/temp files in Internet Options\n• 	User logged off, reset password once more, user able to log in\n•	First call resolution\n\n\nhttps://one.aon.net/sites/GlobalServiceDesk_KnowledgeBase/_layouts/WopiFrame.aspx?sourcedoc=/sites/GlobalServiceDesk_KnowledgeBase/Documents/Global%20-%20oneIdentity%20Global%20PW%20Manager%20-%20PW%20-%20Aon%20Password%20Type%20Resets%20(Aon%20Hewitt).docx&action=default&DefaultItemOpen=1");

/**********************************
2. Button function
**********************************/

$('#WorkstationReset').on('click', function() {
	var caretPos = document.getElementById("text-area").selectionStart;
	var textAreaTxt = $('#text-area').val();
	var txtToAdd = emptyCapture;
	$('#text-area').val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
});