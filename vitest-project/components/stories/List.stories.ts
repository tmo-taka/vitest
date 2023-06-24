import { StoryObj } from "@storybook/vue3";
import List from "../List.vue";

type Story = StoryObj<typeof List >;

export default {
    title: "components/List",
    component: List,
}

export const Template: Story  = {
    render: () => ({
        components: { List },
        template: "<List />",
    })
};