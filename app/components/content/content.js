/**
 * Created by by on 2017/11/28.
 */
import React from 'react'
import './content.less'

let Content = React.createClass({
    getInitialState(){
      return {
          persons:[
              {name:"John",age:"19",sex:"male"},
              {name:"Bob",age:"14",sex:"male"},
              {name:"Amy",age:"20",sex:"female"}
          ]
      }
    },
    render(){
        let persons = this.state.persons;
        let personList =[];
        for(let person of persons){
            personList.push(
                <div>
                    <table>
                        <thead>
                        <th>姓名</th>
                        <th>年纪</th>
                        <th>性别</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.sex}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        return(
            <div>{personList}</div>
        )

    }


})
export default Content;
