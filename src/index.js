import {SupplierId} from "./shared/domain/model/supplier-id.js";
import {Supplier} from "./scm/domain/model/supplier.js";

console.log("JavaScript Review Application - Supply Chain and Procurement Showcase");

try {
    const supplier = new Supplier({
        id: SupplierId.generate(),
        name: "Acme Corp",
        contactEmail: "contact@acme.com"
    });

    console.log(`Purchase Order placed on ${supplier.contactEmail}`);

} catch (error) {
    console.error(`Error: ${error.message}`);
}