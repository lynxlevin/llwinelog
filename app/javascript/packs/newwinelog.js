window.addEventListener("load", () => {
  let templateSelect = document.getElementById("winelog_default_template");
  let countrySelect = document.getElementById("winelog_country_id");
  let region1Select = document.getElementById("winelog_region1_id");
  let classSelect = document.getElementById("winelog_class_id");

  countrySelect.addEventListener("change", {selection: countrySelect, childSelection: region1Select, parentSelection: null, handleEvent: changeSelection});
  region1Select.addEventListener("change", {selection: region1Select, childSelection: classSelect, parentSelection: countrySelect, handleEvent: changeSelection});
  classSelect.addEventListener("change", {selection: classSelect, childSelection: null, parentSelection: region1Select, handleEvent: changeSelection});

  function changeSelection(e) {
    if (this.childSelection != null) {
      changeChild(this.selection, this.childSelection);
    }
    if (this.parentSelection != null) {
      changeParent(this.selection, this.parentSelection);
    }

    function changeChild(selection, childSelection) {
      let selectedId = selection.value;
      let selectedName = selection.selectedOptions[0].innerText;
      let childArray = Array.from(childSelection.children);
      childArray.forEach (option => {
        if (option.label == selectedName || option.label == "--" || selectedId == 1) {
          option.style.display = "";
        } else {
          option.style.display = "none";
        }
      });
      if (Math.floor(childSelection.value / 100) != selectedId) {
        childSelection.value = 1;
      }
    }

    function changeParent(selection, parentSelection) {
      let selectedId = selection.value;
      if (selectedId != 1) {
        parentSelection.value = Math.floor(selectedId / 100);
      } else {
        parentSelection.value = 1;
      }
      changeChild(parentSelection, selection);
    }

    if (region1Select.value == 1) {
      Array.from(classSelect.children).forEach (option => {
          option.style.display = "";
      });
      classSelect.value = 1;
    }
  }

})






// import TurbolinksAdapter from 'vue-turbolinks'
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