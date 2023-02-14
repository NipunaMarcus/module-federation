import { getProducts } from "../../utils/util";
import "./Home.css"

export function Home() {
    // Get product names.
    const products: string[] = getProducts();
    return (
        <div className="home">
            <h3>Remote 1: Home Page</h3>
            {
                products.map((value: string) => {
                    return (
                        <div className="home-card">
                            <p>
                                {value}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
}
