//cardList组件集合了Card组件里面的内容

import React from 'react';
import Card from "./Card";

const CardList =({robots})=>{ //读取cardlist穿过来的props --robots
       // if(true){
       //         throw new Error('noooo')
       // }
        return (
                <div>
                    {
                        robots.map((user, index) => {
                            return (
                                <Card key={index}
                                      id={robots[index].id}
                                      name={robots[index].name}
                                      email={robots[index].email}
                                />)
                        })
                    }
                </div>
        );
}

export default CardList;