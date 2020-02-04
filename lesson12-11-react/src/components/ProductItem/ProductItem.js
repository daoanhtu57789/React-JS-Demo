import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProductItem extends Component {
    onDelete = (id) =>{
        ////eslint-disable-line phải thêm dòng này vào ko thì nó ko chạy
        if(confirm("Bạn có chắc muốn xóa không?")){//eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        let {product,index} = this.props;
        let statusName = product.status?"Còn Hàng" : "Hết Hàng";
        let statusClass = product.status?"warning" : "default";
        return (
            <tr>
                <td>{index+1 }</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
					</span>
                </td>
                <td>
                    Siêu rẻ và đẹp
				</td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-danger  mr-10">
                        Sửa
					</Link>

                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick = {() => this.onDelete(product.id)}
                    >
                        Xóa
					</button>
                </td>
            </tr>
        );
    };
}

export default ProductItem;