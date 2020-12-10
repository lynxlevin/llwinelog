import Vue from 'vue/dist/vue.esm'

window.addEventListener('load', () => {
  const winelog = new Vue({
    el: '#winelog',
    data: {
      original_template_value: 1
    },
    computed: {
      original_templates: function() {
        let newobject = new Object();
        gon.original_templates.forEach (template => {
          newobject[template.id] = template;
        })
        return newobject;
      },
      original_template: function() {
        return this.original_templates[this.original_template_value]
      }
    }
    // components: { App }
  })
})