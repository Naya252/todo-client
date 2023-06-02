import Vue from "vue";

import Button from "../components/base/BaseButton.vue";
import ButtonOutlined from "../components/base/BaseButtonOutlined.vue";
import ButtonIcon from "../components/base/BaseButtonIcon.vue";
import CenterModal from "../components/CenterModal.vue";

Vue.component("my-btn", Button);
Vue.component("my-btn-outlined", ButtonOutlined);
Vue.component("my-btn-icon", ButtonIcon);
Vue.component("my-modal-center", CenterModal);
