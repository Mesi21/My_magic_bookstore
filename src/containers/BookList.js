import React from 'react';
import { connect } from 'react-redux';

class Booklist extends Component {
    state = {  }
    render() { 
        return ( 
            <table>
                <tr>
                    <th> ID </th>
                    <th> Title </th>
                    <th> Category </th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
        );
    }
}
 
export default connect(Booklist);
