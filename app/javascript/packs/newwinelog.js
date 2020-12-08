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
  prepareOptgroups(region1Optgroups, wholeRegion1Optgroups);

  let wholeClassHTML = classSelect.innerHTML;
  let classOptgroups = new Object();
  let wholeClassOptgroups = classSelect.getElementsByTagName("OPTGROUP");
  prepareOptgroups(classOptgroups, wholeClassOptgroups);

  setRegion1Options();
  setClassOptions();

  function prepareOptgroups(optgroups, wholeOptgroups) {
    for (var i = 0; i < wholeOptgroups.length; i++) {
      var label = wholeOptgroups.item(i).label;
      optgroups[label] = wholeOptgroups.item(i).cloneNode(true);
    }
  }

  function toggledCountry() {
    setRegion1Options();
    region1Select.value = 1;

    setClassOptions();
    classSelect.value = 1;
  }
  function toggledRegion1() {
    changeParent(region1Select, countrySelect);

    let region1Value = region1Select.value;
    setRegion1Options();
    region1Select.value = region1Value;

    setClassOptions();
    classSelect.value = 1;
  }
  function toggledClass() {
    changeParent(classSelect, region1Select);
    changeParent(region1Select, countrySelect);

    setRegion1Options();
    changeParent(classSelect, region1Select);

    let classValue = classSelect.value;
    setClassOptions();
    classSelect.value = classValue;
  }

  function setRegion1Options() {
    let countryCode = countrySelect.selectedOptions[0].innerText;
    region1Select.innerHTML = "";
    if (countryCode == "--") { // リセットした時
      region1Select.innerHTML = wholeRegion1HTML;
    } else { // countryを選んだ時 ＆ region1を選んだ時 ＆ classを選んだ時
      let region1Optgroup = region1Optgroups[countryCode];
      region1Select.insertAdjacentHTML("afterbegin", nullOption);
      region1Select.appendChild(region1Optgroup);
    }
  }
  function setClassOptions() {
    let countryCode = countrySelect.selectedOptions[0].innerText;
    let region1Code = region1Select.selectedOptions[0].innerText;
    classSelect.innerHTML = "";
    function fillClassSelect(text) {
      let classOptgroup = classOptgroups[text];
      if (classOptgroup != null) {
        classSelect.appendChild(classOptgroup);
      }
    }

    if  (countryCode == "--" && region1Code == "--") { // リセットした時
      classSelect.innerHTML = wholeClassHTML;
    } else if (countryCode != "--" && region1Code == "--") { // countryを選んだ時
      let presentRegion1Options = region1Select.getElementsByTagName("OPTION");
      let region1Texts = [];
      for (var i = 0; i < presentRegion1Options.length; i++) {
        var text = presentRegion1Options.item(i).innerText;
        region1Texts.push(text);
      }
      region1Texts.forEach (text => {
        fillClassSelect(text)
      })
    } else { // つまり(countryCode != "--" && region1Code != "--") region1を選んだ時＆classを選んだ時
      classSelect.insertAdjacentHTML("afterbegin", nullOption);
      fillClassSelect(region1Code);
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