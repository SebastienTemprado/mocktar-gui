import { shallowMount } from "@vue/test-utils";
import MockList from "@/components/mock-list/mock-list.vue";

describe("mock-list.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(MockList, {
      props: {  }
    });
    //expect(wrapper.text()).toMatch(msg);
  });
});
