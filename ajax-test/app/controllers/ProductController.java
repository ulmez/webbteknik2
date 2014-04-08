package controllers;

import java.util.List;

import com.avaje.ebean.Ebean;

import models.Product;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.oneProduct;

public class ProductController extends Controller {
	
	public static Result getProducts() {
		List<Product> products = Ebean.find(Product.class).findList();
		
		return ok(Json.toJson(products));
	}
	
	public static Result getProduct(int id) {
		Product product = Ebean.find(Product.class, id);
		
		return ok(oneProduct.render(product));
	}
	
	public static Result insertProduct() {
		Product product = new Product();
		Product form = Form.form(Product.class).bindFromRequest().get();
		
		product.setProductName(form.getProductName());
		product.setDescription(form.getDescription());
		product.setCost(form.getCost());
		product.setRrp(form.getRrp());
		
		Ebean.save(product);
		
		return ok();
	}
	
	public static Result updateProduct(int id) {
		Product product = Ebean.find(Product.class, id);
		Product form = Form.form(Product.class).bindFromRequest().get();
		
		product.setProductName(form.getProductName());
		product.setDescription(form.getDescription());
		product.setCost(form.getCost());
		product.setRrp(form.getRrp());
		
		Ebean.update(product);
		
		return ok();
	}
	
	public static Result deleteProduct(int id) {
		Product product = Ebean.find(Product.class, id);
		Ebean.delete(product);
		
		return ok();
	}
	
}
