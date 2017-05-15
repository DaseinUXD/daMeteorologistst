/**
 * Created by daseinuxd on 5/9/2017.
 */
var getEmail = new XMLHttpRequest();
getEmail.onload = function () {
    console.log(this.responseXML.documentElement.getElementsByTagName('table'));

    document.getElementById('emailTable').innerHTML =


        this.responseXML.documentElement.getElementsByTagName('table')[1].tHead.textContent +
        this.responseXML.documentElement.getElementsByTagName('table')[1].children[1].childNodes[1].cells[1].innerHTML +
        this.responseXML.documentElement.getElementsByTagName('table')[1].children[1].childNodes[1].childNodes[1].innerHTML+
        this.responseXML.documentElement.getElementsByTagName('table')[1].rows[1].children[1].innerHTML +
        this.responseXML.documentElement.getElementsByTagName('table')[1].tBodies[0].rows[0].cells[0].innerHTML +
        this.responseXML.documentElement.getElementsByTagName('table')[1].tBodies[0].rows[1].cells[0].innerHTML
    // [1].children[1].children["0"].cells["0"].childNodes["0"]

}
getEmail.open('GET','index.html',true);
getEmail.responseType = 'document';
getEmail.send();