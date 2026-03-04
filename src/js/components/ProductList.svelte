<script lang=ts>
    import { onMount } from "svelte";
    import { getParam } from '../utils.mts';
    import { getProductData } from '../productData.mts';
    import type { Product } from '../types.mts';

    let category = $state("");
    let products:Product[] = $state([]);
    async function init() {
        category = getParam("category") || "";
        const data = await getProductData(category);
        products = data.results;
    }

    onMount(init);
</script>

<h2>Top Products For: {category}</h2>

<ul class="product-list">
    {#each products as product}
        <li class="product-card">
            <a href='/products/{product.id}/'>
                <img
                src={product.images.primaryMedium}
                alt="image of {product.name}"
                />
                <h3 class="card__brand">{product.brand.name}</h3>
                <h2 class="card__name">{product.name}</h2>
                <p class="product-card__price">{product.finalPrice}</p>
            </a>
        </li>
    {/each}
</ul>