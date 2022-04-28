import React from "react";
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

let oldFunc = null;

function Home () {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    console.log(oldFunc === onSelectCategory);
    oldFunc = onSelectCategory;

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={[{name: 'популярности', type: 'popular'},
                        {name: 'цене', type: 'price'},
                        { name: 'алфавиту', type: 'alphabet'}

                    ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))
                }
            </div>
        </div>
    )
}

export default Home;