"use strict";exports.id=69,exports.ids=[69],exports.modules={8309:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ProductCard});var a=r(784),o=r(1440),s=r.n(o),i=r(2451),n=r.n(i),d=r(4571),c=r(9885),l=r(8699);let u=c.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));u.displayName="Card";let f=c.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",e),...t}));f.displayName="CardHeader";let h=c.forwardRef(({className:e,...t},r)=>a.jsx("h3",{ref:r,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));h.displayName="CardTitle";let p=c.forwardRef(({className:e,...t},r)=>a.jsx("p",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",e),...t}));p.displayName="CardDescription";let g=c.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,l.cn)("p-6 pt-0",e),...t}));g.displayName="CardContent";let m=c.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",e),...t}));m.displayName="CardFooter";var y=r(5555),x=r(9364);function ProductCard({id:e,title:t,price:r,image:o,description:i,href:c,showButton:l=!0,buttonText:f="Zobrazit"}){return a.jsx(d.E.div,{variants:x.Ji,initial:"initial",animate:"animate",exit:"exit",children:a.jsx(s(),{href:c,children:(0,a.jsxs)(u,{className:"group cursor-pointer card-premium hover:shadow-medium transition-all duration-500 transform hover:scale-[1.02] overflow-hidden",children:[(0,a.jsxs)("div",{className:"aspect-square overflow-hidden rounded-t-2xl bg-surface-secondary relative",children:[a.jsx(n(),{src:o,alt:t,width:400,height:400,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",loading:"lazy"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),(0,a.jsxs)(g,{className:"p-6 space-y-3",children:[a.jsx("h3",{className:"text-lg font-serif font-semibold text-text group-hover:text-accent transition-colors duration-300 truncate",children:t}),a.jsx("p",{className:"text-text-secondary text-sm line-clamp-2 leading-relaxed",children:i}),(0,a.jsxs)("div",{className:"flex items-center justify-between pt-2",children:[a.jsx("span",{className:"text-xl font-serif font-bold text-text",children:r}),l&&a.jsx(y.z,{variant:"outline",size:"sm",className:"opacity-0 group-hover:opacity-100 transition-all duration-500 border-accent/30 text-accent hover:text-white hover:bg-accent hover:border-accent transform translate-y-2 group-hover:translate-y-0",children:f})]})]})]})})})}},9506:(e,t,r)=>{r.d(t,{ZP:()=>d});var a=r(5153);let o=(0,a.createProxy)(String.raw`C:\Users\yuryd\Downloads\petal-scroll-boutique-main\components\ProductCard.tsx`),{__esModule:s,$$typeof:i}=o,n=o.default,d=n},134:(e,t,r)=>{r.d(t,{$h:()=>getProductByHandle,T4:()=>formatPrice,Tv:()=>getFirstImageUrl,Xp:()=>getProducts,YS:()=>getFirstVariant,dm:()=>getCollectionProducts,sg:()=>getAllImageUrls});let a=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"fairy-bloom-cz.myshopify.com",o=process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN||"c02d60556e481207a1e9b194501dafe4",s=`https://${a}/api/2024-01/graphql.json`,i=`
  query getProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                id
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`,n=`
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
    }
  }
`,d=`
  query getCollectionProducts($handle: String!, $first: Int!, $after: String) {
    collection(handle: $handle) {
      id
      title
      products(first: $first, after: $after) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  id
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;async function shopifyRequest(e,t={}){try{let r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":o},body:JSON.stringify({query:e,variables:t})});if(!r.ok){let e=await r.text();throw console.error("Shopify API Error:",{status:r.status,statusText:r.statusText,body:e}),Error(`Shopify API error: ${r.status} ${r.statusText}`)}let a=await r.json();if(a.errors)throw console.error("GraphQL errors:",a.errors),Error(`GraphQL errors: ${JSON.stringify(a.errors)}`);return a}catch(e){throw console.error("Shopify request failed:",e),e}}async function getProducts(e=20,t){try{let r=await shopifyRequest(i,{first:e,after:t});return r.data.products}catch(e){throw console.error("Failed to fetch products:",e),e}}async function getProductByHandle(e){try{let t=await shopifyRequest(n,{handle:e});return t.data.product}catch(t){throw console.error(`Failed to fetch product with handle "${e}":`,t),t}}async function getCollectionProducts(e,t=20,r){try{let a=await shopifyRequest(d,{handle:e,first:t,after:r});return a.data.collection}catch(t){throw console.error(`Failed to fetch collection products for "${e}":`,t),t}}function formatPrice(e){return new Intl.NumberFormat("cs-CZ",{style:"currency",currency:e.currencyCode}).format(parseFloat(e.amount))}function getFirstImageUrl(e){let t=e.images.edges[0]?.node;return t?.url||"/placeholder.svg"}function getAllImageUrls(e){return e.images.edges.map(e=>e.node.url)}function getFirstVariant(e){return e.variants.edges[0]?.node||null}}};