import React, {useState} from "react";

const Categories = ({items, onClickItem}) => {

    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    console.log(activeItem)

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {
                    items.map((name, index) => (
                        <li className={
                            activeItem === index ? 'active' : ''
                        } onClick={() => setActiveItem(index)} key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

// class Categories extends React.Component {
//
//     state = {
//         activeItem: 3,
//         text: 187,
//     }
//
//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//             text: 19 + index,
//         });
//     }
//
//     render() {
//         const {items, onClickItem} = this.props;
//         console.log(this.state)
//         return (
//         <div className="categories">s
//             <ul>
//                 <li className="active">Все</li>
//                 {
//                     items.map((name, index) => (
//                         <li className={
//                             this.state.activeItem === index ? 'active' : ''
//                         } onClick={() => this.onSelectItem(index)} key={`${name}_${index}`}>
//                             {name}
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
//     }
// }

export default Categories;