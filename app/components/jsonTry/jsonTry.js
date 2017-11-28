/**
 * Created by by on 2017/11/28.
 */
import React from 'react'
import jsons from './data/student.json'
let JSONTRY = React.createClass({
    componentWillMount() {
        let studentData=jsons;
        console.log("data type:"+typeof(studentData));
        console.log("student length:"+studentData.student.length);
        console.log("student1 name:"+studentData.student[0].name);
        console.log("student1 age:"+studentData.student[0].age);
        console.log("student2 name:"+studentData.student[1].name);
        console.log("student2 age:"+studentData.student[1].age);
    },
    render(){
        let studentData=jsons;
        return(
            <div>
                <table>
                    <tr>
                        <td>{studentData.student[0].name}</td>
                        <td>{studentData.student[0].age}</td>
                    </tr>
                    <tr>
                        <td>{studentData.student[1].name}</td>
                        <td>{studentData.student[1].age}</td>
                    </tr>
                </table>
            </div>
        )
    }
})
export default JSONTRY;