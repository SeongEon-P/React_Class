import React, { useEffect, useRef, useState } from "react";
import productService from "../../service/product.service";
import ProductSave from "../../components/ProductSave";
import Product from "../../models/Product";
import ProductDelete from "../../components/ProductDelete";

const Admin=()=>{
	const [productList, setProductList] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(new Product('', '', 0));
	const saveComponent = useRef();
	const [errorMessage, setErrorMessage] = useState('');
	const deleteComponent = useRef();

	useEffect(() =>{
		productService.getAllProducts().then((response) => {
		setProductList(response.data);
		});
	}, []);

	const createProductRequest = () => {
		saveComponent.current?.showProductModal();
	};

	const saveProductWatcher = (product) => {
		let itemIndex = productList.findIndex((item) => item.id === product.id);
		if (itemIndex !== -1) {
			const newList = productList.map((item) => {
				if (item.id === product.id) {
					return product;
				}
				return item;
			});
			setProductList(newList);
		} else {
			const newList = productList.concat(product);
			setProductList(newList);
		}
	};
	
	const editProductRequest = (item) => {
		console.log(item);
		setSelectedProduct(item);
		saveComponent.current?.showProductModal(); //모달 보이게 됨
	};

	const deleteProductRequest = (item) => {
		console.log(item);
		setSelectedProduct(item);
		deleteComponent.current?.showDeleteModal();
	};

	const deleteProduct = () => {
		//if (!window.confirm('정말로 삭제하겠습니까?')) return;
		productService
			.deleteProduct(selectedProduct)
			.then((_) => {
				setProductList(productList.filter((p) => p.id !== selectedProduct.id));
			})
			.catch((err) => {
				setErrorMessage('삭제중 에러발생!');
				console.log(err);
			});
	};

	return (
	<div className='container'>
		<div className='card mt-5'>
			{errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
			<div className='card-header'>
				<div className='row'>
					<div className='col-6'><h3>모든 제품들</h3></div>
					<div className='col-6 text-end'>
						<button className='btn btn-primary' onClick={createProductRequest}>새 제품</button>
					</div>
				</div>
			</div>
			<div className="card-body">
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Name</th>
						<th scope='col'>Price</th>
						<th scope='col'>Date</th>
						<th scope='col'>Action</th>
					</tr>
				</thead>
				<tbody>
				{productList.map((item, ind) => (
					<tr key={item.id}>
						<th scope='row'>{ind + 1}</th>
						<td>{item.name}</td>
						<td>{`${item.price} 원`}</td>
						<td>{new Date(item.createTime).toLocaleString()}</td>
						<td>
							<button className='btn btn-primary me-1' onClick={()=>editProductRequest(item)} >수 정</button>
							<button className='btn btn-danger' onClick={()=>deleteProductRequest(item)}>삭 제</button>
						</td>
					</tr>
				))}
				</tbody>
				</table>
			</div>
		</div>
		<ProductSave
			ref={saveComponent} 
			product={selectedProduct} 
			onSaved={(p) => saveProductWatcher(p)} />
		<ProductDelete ref={deleteComponent} onConfirmed={() => deleteProduct()} />
	</div>
	);
}
export default Admin;