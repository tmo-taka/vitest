import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue'
import Page from '../pages/index.vue'

describe('page', () => {
    test('snapshot', () =>{
        const page = render(Page)
        expect(page).toMatchSnapshot();
    })
});