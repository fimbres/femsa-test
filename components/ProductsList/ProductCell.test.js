import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCell } from './ProductCell';

const testProduct = {
    createdAt: "2022-12-08T18:54:56.243Z",
    id: 5,
    image: "https://loremflickr.com/640/480/people",
    is_redemption: true,
    points: 69814,
    product: "Rustic Rubber Bacon",
};

let tree;

describe('<ProductCell />', () => {
    beforeEach(() => {
        tree = renderer
            .create(
                <ProductCell
                    product={testProduct}
                    onPress={() => console.log("onPress")}
                />
            ).toJSON();
    });

    it('has 2 child', () => {
        expect(tree.children.length).toBe(2);
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
