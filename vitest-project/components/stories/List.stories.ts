import { Story } from "@storybook/vue3";
import List from "../List.vue";

export default {
    title: "components/List",
    component: List,
}

const Template: Story<typeof List> = () => ({
    components: { List },
    template: "<List />",
});

export const Default = Template.bind({});
Default.storyName = "Increment List";