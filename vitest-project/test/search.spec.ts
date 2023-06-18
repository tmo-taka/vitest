import { vi, describe, expect, test } from 'vitest';
import { useRoute } from 'vue-router'
import Search from '../pages/search.vue'
import { mount } from '@vue/test-utils'

// 型をmockに合わせた
// const userRouterMock = useRouter as Vitest.Mocked<typeof useRouter>;

vi.mock('vue-router');
// vi.mock("#app", () => ({ useRouter: vi.fn() }));

describe('search page', () => {
    const mockRoute = (name:string) => {
        useRoute.mockReturnValue({
            query: {
                name,
            },
        })
    }


    test('get query', async () =>{
        mockRoute('abc')
        const wrap = mount(Search);

        // const h1 = await wrap.html().find('h1');
        expect(wrap.html()).toContain('こんにちはabcさん')

        // const h1 = await screen.getByRole('heading', {level: 1});
        // screen.debug(h1);
        // expect(h1).getByText('こんにちはabcさん');
    })
});