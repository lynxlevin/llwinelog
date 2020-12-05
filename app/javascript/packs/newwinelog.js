window.addEventListener("load", () => {
  let templateSelect = document.getElementById("winelog_default_template");
  let countrySelect = document.getElementById("winelog_country_id");
  let region1Select = document.getElementById("winelog_region1_id");
  let classSelect = document.getElementById("winelog_class_id");

  countrySelect.addEventListener("change", toggledCountry);
  region1Select.addEventListener("change", toggledRegion1);
  classSelect.addEventListener("change", toggledClass);

  function toggledCountry() {
    changeChild(countrySelect, region1Select);
    changeClass();
    region1Select.value = 1;
    classSelect.value = 1;
  }
  function toggledRegion1() {
    changeChild(region1Select, classSelect);
    changeParent(region1Select, countrySelect);
    classSelect.value = 1;
  }
  function toggledClass() {
    changeParent(classSelect, region1Select);
    changeParent(region1Select, countrySelect);
  }

  function changeSelect(e) {
    if (this.childSelect != null) {
      changeChild(this.Select, this.childSelect);
    }
    if (this.parentSelect != null) {
      changeParent(this.Select, this.parentSelect);
    }
  }
  function changeChild(Select, childSelect) {
    let selectedId = Select.value;
    let selectedName = Select.selectedOptions[0].innerText;
    let childArray = Array.from(childSelect.children);
    childArray.forEach (option => {
      if (option.label == selectedName || option.label == "--" || selectedId == 1) {
        if (option.style.display == "none") {
          Array.from(option.children).forEach(opt => {
            opt.outerHTML = opt.innerHTML;
          })
          option.style.display = "";
        }
      } else {
        if (option.style.display != "none") {
          Array.from(option.children).forEach(opt => {
            opt.outerHTML = `<span style="display: none;">${opt.outerHTML}</span>`;
          })
          option.style.display = "none";
        }
      }
    });
  }

  function changeParent(Select, parentSelect) {
    let selectedId = Select.value;
    if (selectedId != 1) {
      parentSelect.value = Math.floor(selectedId / 100);
    } else {
      parentSelect.value = 1;
    }
    changeChild(parentSelect, Select);
  }

  function changeClass() {
    let countryId = countrySelect.value;
    let childArray = Array.from(classSelect.children);
    childArray.forEach (option => {
      if (option.style.display == "none") {
        Array.from(option.children).forEach(opt => {
          opt.outerHTML = opt.innerHTML;
        })
        option.style.display = "";
      }
      if (Math.floor(option.children[0].value / 10000) != countryId && option.label != "--" && countryId != 1) {
        if (option.style.display != "none") {
          Array.from(option.children).forEach(opt => {
            opt.outerHTML = `<span style="display: none;">${opt.outerHTML}</span>`;
          })
          option.style.display = "none";
        }
      }
    });
    if (Math.floor(classSelect.value / 10000) != countryId) {
      classSelect.value = 1;
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