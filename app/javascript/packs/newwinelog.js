// window.addEventListener("load", () => {
//   let countrySelect = document.getElementById("winelog_country_id");
//   let region1Select = document.getElementById("winelog_region1_id");
//   let classSelect = document.getElementById("winelog_class_id");

//   countrySelect.addEventListener("change", toggledCountry);
//   region1Select.addEventListener("change", toggledRegion1);
//   classSelect.addEventListener("change", toggledClass);

//   function toggledCountry() {
//     changeChild(countrySelect, region1Select);
//     changeClass();
//     region1Select.value = 1;
//     classSelect.value = 1;
//   }
//   function toggledRegion1() {
//     changeChild(region1Select, classSelect);
//     changeParent(region1Select, countrySelect);
//     classSelect.value = 1;
//   }
//   function toggledClass() {
//     changeParent(classSelect, region1Select);
//     changeParent(region1Select, countrySelect);
//   }

//   function changeSelect(e) {
//     if (this.childSelect != null) {
//       changeChild(this.Select, this.childSelect);
//     }
//     if (this.parentSelect != null) {
//       changeParent(this.Select, this.parentSelect);
//     }
//   }
//   function changeChild(Select, childSelect) {
//     let selectedId = Select.value;
//     let selectedName = Select.selectedOptions[0].innerText;
//     let childArray = Array.from(childSelect.children);
//     childArray.forEach (option => {
//       if (option.style.display == "none") {
//         Array.from(option.children).forEach(opt => {
//           opt.outerHTML = opt.innerHTML;
//         })
//         option.style.display = "";
//       }
//       if (option.label != selectedName && option.label != "--" && selectedId != 1) {
//         if (option.style.display != "none") {
//           Array.from(option.children).forEach(opt => {
//             opt.outerHTML = `<span style="display: none;">${opt.outerHTML}</span>`;
//           })
//           option.style.display = "none";
//         }
//       }
//     });
//   }

//   function changeParent(Select, parentSelect) {
//     let selectedId = Select.value;
//     if (selectedId != 1) {
//       parentSelect.value = Math.floor(selectedId / 100);
//     } else {
//       parentSelect.value = 1;
//     }
//     changeChild(parentSelect, Select);
//   }

//   function changeClass() {
//     let countryId = countrySelect.value;
//     let childArray = Array.from(classSelect.children);
//     childArray.forEach (option => {
//       if (option.style.display == "none") {
//         Array.from(option.children).forEach(opt => {
//           opt.outerHTML = opt.innerHTML;
//         })
//         option.style.display = "";
//       }
//       let num = option.children[0].value;
//       if (Math.floor(num / 10 ** (num.length - countryId.length)) != countryId && option.label != "--" && countryId != 1) {
//         if (option.style.display != "none") {
//           Array.from(option.children).forEach(opt => {
//             opt.outerHTML = `<span style="display: none;">${opt.outerHTML}</span>`;
//           })
//           option.style.display = "none";
//         }
//       }
//     });
//     if (Math.floor(classSelect.value / 10000) != countryId) {
//       classSelect.value = 1;
//     }
//   }

// })

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

  remakeRegion1Options();
  remakeClassOptions();

  function toggledCountry() {
    remakeRegion1Options();
    remakeClassOptionsFromCountry();
    region1Select.value = 1;
    classSelect.value = 1;
  }
    function toggledRegion1() {
    remakeClassOptions();
    changeParent(region1Select, countrySelect); // 要修正
    classSelect.value = 1;
  }

  function remakeRegion1Options() {
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

  function remakeClassOptions() {
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



  function toggledClass() {
    changeParent(classSelect, region1Select); // 要修正
    changeParent(region1Select, countrySelect); // 要修正
  }

  function changeChild(Select, childSelect) {
    let selectedId = Select.value;
    let selectedName = Select.selectedOptions[0].innerText;
    let childArray = Array.from(childSelect.children);
    childArray.forEach (option => {
      if (option.style.display == "none") {
        Array.from(option.children).forEach(opt => {
          opt.outerHTML = opt.innerHTML;
        })
        option.style.display = "";
      }
      if (option.label != selectedName && option.label != "--" && selectedId != 1) {
        if (option.style.display != "none") {
          Array.from(option.children).forEach(opt => {
            opt.outerHTML = `<span style="display: none;">${opt.outerHTML}</span>`;
          })
          option.style.display = "none";
        }
      }
    });
  }

  function changeParent(Select, parentSelect) { // 要修正
    let selectedId = Select.value;
    if (selectedId != 1) {
      parentSelect.value = Math.floor(selectedId / 100);
    } else {
      parentSelect.value = 1;
    }
    changeChild(parentSelect, Select); // 要修正
  }

  function remakeClassOptionsFromCountry() {
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