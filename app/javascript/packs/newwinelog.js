window.addEventListener("load", () => {
  let countrySelect = document.getElementById("winelog_country_id");
  let region1Select = document.getElementById("winelog_region1_id");
  let classSelect = document.getElementById("winelog_class_id");

  countrySelect.addEventListener("change", toggledCountry);
  region1Select.addEventListener("change", toggledRegion1);
  classSelect.addEventListener("change", toggledClass);

  let nullOption = `<optgroup label="--"><option value="1">--</option></optgroup>`;

  let wholeRegion1HTML = region1Select.innerHTML;
  let region1Optgroups = new Object();
  let wholeRegion1Optgroups = region1Select.getElementsByTagName("OPTGROUP");
  for (var i = 0; i < wholeRegion1Optgroups.length; i++) {
    var label = wholeRegion1Optgroups.item(i).label;
    region1Optgroups[label] = wholeRegion1Optgroups.item(i).cloneNode(true);
  }

  let wholeClassHTML = classSelect.innerHTML;
  let classOptgroups = new Object();
  let wholeClassOptgroups = classSelect.getElementsByTagName("OPTGROUP");
  for (var i = 0; i < wholeClassOptgroups.length; i++) {
    var label = wholeClassOptgroups.item(i).label;
    classOptgroups[label] = wholeClassOptgroups.item(i).cloneNode(true);
  }

  setRegion1Options();
  setClassOptionsToRegion1Value();

  function toggledCountry() {
    setRegion1Options();
    region1Select.value = 1;

    setClassOptionsToRegion1Options();
    classSelect.value = 1;
  }
  function toggledRegion1() {
    changeParent(region1Select, countrySelect);

    let region1Value = region1Select.value;
    setRegion1Options();
    region1Select.value = region1Value;

    setClassOptionsToRegion1Value();
    classSelect.value = 1;
  }
  function toggledClass() {
    changeParent(classSelect, region1Select);
    changeParent(region1Select, countrySelect);

    setRegion1Options();
    changeParent(classSelect, region1Select);

    let classValue = classSelect.value;
    setClassOptionsToRegion1Value();
    classSelect.value = classValue;
  }

  function setRegion1Options() {
    let countryCode = countrySelect.selectedOptions[0].innerText;
    region1Select.innerHTML = "";
    if (countryCode == "--") {
      region1Select.innerHTML = wholeRegion1HTML;
      return null;
    }
    let region1Optgroup = region1Optgroups[countryCode];
    region1Select.insertAdjacentHTML("afterbegin", nullOption);
    region1Select.appendChild(region1Optgroup);
  }

  function setClassOptionsToRegion1Value() {
    let region1Code = region1Select.selectedOptions[0].innerText;
    classSelect.innerHTML = "";
    if (region1Code == "--") {
      classSelect.innerHTML = wholeClassHTML;
      return null;
    }
    classSelect.insertAdjacentHTML("afterbegin", nullOption);
    if (classOptgroups[region1Code] != null) {
      let classOptgroup = classOptgroups[region1Code];
      classSelect.appendChild(classOptgroup);
    }
  }

  function changeParent(Select, parentSelect) {
    let selectedId = Select.value;
    if (selectedId != 1) {
      parentSelect.value = Math.floor(selectedId / 100);
    } else {
      parentSelect.value = 1;
    }
  }

  function setClassOptionsToRegion1Options() {
    let presentRegion1Options = region1Select.getElementsByTagName("OPTION");
    let region1Texts = [];
    for (var i = 0; i < presentRegion1Options.length; i++) {
      var text = presentRegion1Options.item(i).innerText;
      region1Texts.push(text);
    }

    classSelect.innerHTML = "";
    region1Texts.forEach (text => {
      if (classOptgroups[text] != null) {
      let classOptgroup = classOptgroups[text];
      classSelect.appendChild(classOptgroup);
      }
    })
  }
})




// import Vue from 'vue/dist/vue.esm'
// // import App from '../app.vue'

// Vue.use(TurbolinksAdapter)

// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#app',
//     data: {
//       message: "Can you say hello?",
//       wine: "Gevrey Chambertin",
//       selected: ''
//     }
//     // components: { App }
//   })
// })