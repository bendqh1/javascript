window.setInterval( () => {

  /// SELECT BRANCH FROM SELECT LIST
    
    const branch = document.querySelector("#GGG");
    branch.value = NUMBERED_VALUE;
    branch.dispatchEvent(new Event('change'));

  /// SELECT ALL THE REST

    const first_name = document.querySelector("#AAA");
    first_name.value = "AAA";
    first_name.dispatchEvent(new Event('change'));

    const last_name = document.querySelector("#BBB");
    last_name.value = "BBB";
    last_name.dispatchEvent(new Event('change'));

    const id = document.querySelector("#CCC");
    id.value = "CCC";
    id.dispatchEvent(new Event('change'));

     const phone = document.querySelector("#DDD");
    phone.value = "DDD";
    phone.dispatchEvent(new Event('change'));

    const email = document.querySelector("#EEE");
    email.value = "EEE";
    email.dispatchEvent(new Event('change'));

    const emailValidation = document.querySelector("#FFF");
    emailValidation.value = "FFF";
    // ---------- Isolate this by dropdown in devtool ----------
    emailValidation.dispatchEvent(new Event('change'));

  // DONE

}, 5000);
