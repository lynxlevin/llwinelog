window.addEventListener("load", () => {
  let templateSelect = document.getElementById("winelog_default_template");
  let countrySelect = document.getElementById("winelog_country_id");
  let region1Select = document.getElementById("winelog_region1_id");
  let classSelect = document.getElementById("winelog_class_id");

  countrySelect.addEventListener("change", {selection: countrySelect, targetSelection: region1Select, handleEvent: changeSelection});
  region1Select.addEventListener("change", {selection: region1Select, targetSelection: classSelect, handleEvent: changeSelection});

  function changeSelection(e) {
    let selectedId = this.selection.value;
    let selectedName = this.selection.selectedOptions[0].innerText;

    let targetArray = Array.from(this.targetSelection.children);
    targetArray.forEach (option => {
      if (option.label == selectedName || option.label == "--" || selectedId == 1) {
        option.style.display = "";
      } else {
        option.style.display = "none";
      }
    });
    if (Math.floor(this.targetSelection.value / 100) != selectedId) {
      this.targetSelection.value = 1;
    }
    if (region1Select.value == 1) {
      Array.from(classSelect.children).forEach (option => {
          option.style.display = "";
      });
      classSelect.value = 1;
    }
  }

  // function changeClass() {
  //   let selectedRegion1Id = region1Select.value;
  //   let selectedRegion1Name;
  //   Array.from(region1Select.children).forEach()
  // }







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