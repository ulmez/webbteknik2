package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;
	
	@Column(name = "product_name")
	private String productName;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "cost")
	private double cost;
	
	@Column(name = "rrp")
	private double rrp;
	
	public Product() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public double getRrp() {
		return rrp;
	}

	public void setRrp(double rrp) {
		this.rrp = rrp;
	}
	
}