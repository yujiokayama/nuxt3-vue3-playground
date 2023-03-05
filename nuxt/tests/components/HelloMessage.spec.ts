import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MainTitle from "../../components/MainTitle.vue";

describe("HelloMessage", () => {
  test("メッセージが表示される", () => {
    const wrapper = mount(MainTitle, {
      props: {
        msg: "Hello, World!",
      },
    });
    expect(wrapper.text()).toContain("Hello, World!");
  });
});
