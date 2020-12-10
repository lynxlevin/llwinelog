// 課題
// innerHTMLやappendChildのエスケープが必要か？ドロップダウンでどこまでCSRFできるのか?

window.addEventListener("load", () => {
  // イベントリスナの設定
  let countrySelect = document.getElementById("winelog_country_id");
  let region1Select = document.getElementById("winelog_region1_id");
  let classSelect = document.getElementById("winelog_class_id");
  countrySelect.addEventListener("change", toggledCountry);
  region1Select.addEventListener("change", toggledRegion1);
  classSelect.addEventListener("change", toggledClass);

  // region1の初期値を保存
  let wholeRegion1HTML = region1Select.innerHTML;
  let region1Optgroups = new Object();
  let wholeRegion1Optgroups = region1Select.getElementsByTagName("OPTGROUP");
  prepareOptgroups(region1Optgroups, wholeRegion1Optgroups);
  // classの初期値を保存
  let wholeClassHTML = classSelect.innerHTML;
  let classOptgroups = new Object();
  let wholeClassOptgroups = classSelect.getElementsByTagName("OPTGROUP");
  prepareOptgroups(classOptgroups, wholeClassOptgroups);
  function prepareOptgroups(optgroups, wholeOptgroups) {
    for (var i = 0; i < wholeOptgroups.length; i++) {
      var label = wholeOptgroups.item(i).label;
      optgroups[label] = wholeOptgroups.item(i).cloneNode(true);
    }
  }

  // edit画面表示時の動作 ※サーバーサイドでする方がいいか?
  setRegion1Options();
  setClassOptions();

  function toggledCountry() {
    // region1を変更
    setRegion1Options();
    region1Select.value = 1;
    // classを変更
    setClassOptions();
    classSelect.value = 1;
  }
  function toggledRegion1() {
    // countryを変更
    changeParent(region1Select, countrySelect);
    // region1を変更
    let region1Value = region1Select.value;
    setRegion1Options();
    region1Select.value = region1Value;
    // classを変更
    setClassOptions();
    classSelect.value = 1;
  }
  function toggledClass() {
    // countryを変更
    changeParent(classSelect, region1Select);
    changeParent(region1Select, countrySelect);
    // region1を変更
    setRegion1Options();
    changeParent(classSelect, region1Select);
    // classを変更
    let classValue = classSelect.value;
    setClassOptions();
    classSelect.value = classValue;
  }

  function setRegion1Options() { // http://titi-fe.hatenablog.com/entry/2016/02/15/124745
    let countryCode = countrySelect.selectedOptions[0].innerText;
    region1Select.innerHTML = "";
    if (countryCode == "--") { // リセットした時
      region1Select.innerHTML = wholeRegion1HTML;
    } else { // countryを選んだ時 ＆ region1を選んだ時 ＆ classを選んだ時
      region1Select.appendChild(region1Optgroups["--"]);
      region1Select.appendChild(region1Optgroups[countryCode]);
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
      classSelect.appendChild(classOptgroups["--"]);
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