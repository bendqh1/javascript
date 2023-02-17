// ==UserScript==
// @name         BL-contact
// @namespace    http://tampermonkey.net/
// @match        https://www.btl.gov.il/About/contact_us/Pages/form.aspx
// @grant        none
// ==/UserScript==

setTimeout( ()=>{
    document.querySelector("#ctl00_ctl49_g_bd30f8d7_5e0d_4f39_a64a_93db2b688a96_ctl00_txt_Fname").value = "שם פרטי";
    document.querySelector("#ctl00_ctl49_g_bd30f8d7_5e0d_4f39_a64a_93db2b688a96_ctl00_txt_Lname").value = "שם משפחה";
    document.querySelector(".zehut").value = "מספר תעודת זהות ישראלית";

    document.querySelector("#ctl00_ctl49_g_bd30f8d7_5e0d_4f39_a64a_93db2b688a96_ctl00_ddl_snif").value = "INDEX_OF_A_CITY_FROM_A_LIST"
    // Isolate select_list option index and put it as value WITHOUT double quotes;

    document.querySelector(".phoneIL").value = "טלפון";
    document.querySelector(".cleanEmail").value = "אימייל";
    document.querySelector("#ctl00_ctl49_g_bd30f8d7_5e0d_4f39_a64a_93db2b688a96_ctl00_txt_emailVerify").value = "חזרה על האימייל";

    document.querySelector("#ctl00_ctl49_g_bd30f8d7_5e0d_4f39_a64a_93db2b688a96_ctl00_ddl_subject").value = "INDEX_OF_A_DEPARTMENT_FROM_A_LIST"
    // Isolate select_list option index and put it as value WITH double quotes;
}, 2000);
