"use strict";(()=>{var e={};e.id=565,e.ids=[565],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6301:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>l,originalPathname:()=>h,requestAsyncStorage:()=>c,routeModule:()=>n,serverHooks:()=>p,staticGenerationAsyncStorage:()=>u,staticGenerationBailout:()=>d});var o={};t.r(o),t.d(o,{POST:()=>POST});var a=t(884),s=t(6132),i=t(5798);async function POST(e){try{let{items:r}=await e.json();if(!r||!Array.isArray(r)||0===r.length)return i.Z.json({error:"No items provided"},{status:400});let t=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"fairy-bloom-cz.myshopify.com",o=process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;if(!o)return i.Z.json({error:"Shopify configuration missing"},{status:500});let a=`
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            totalPrice {
              amount
              currencyCode
            }
            lineItems(first: 10) {
              edges {
                node {
                  id
                  title
                  quantity
                  variant {
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
          checkoutUserErrors {
            field
            message
          }
        }
      }
    `,s=r.map(e=>({variantId:e.variantId,quantity:e.quantity})),n=await fetch(`https://${t}/api/2024-01/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":o},body:JSON.stringify({query:a,variables:{input:{lineItems:s}}})});if(!n.ok)throw Error(`Shopify API error: ${n.status}`);let c=await n.json();if(c.errors)return console.error("GraphQL errors:",c.errors),i.Z.json({error:"Failed to create checkout"},{status:400});let u=c.data?.checkoutCreate?.checkout,p=c.data?.checkoutCreate?.checkoutUserErrors;if(p&&p.length>0)return console.error("Checkout user errors:",p),i.Z.json({error:p[0].message},{status:400});if(!u?.webUrl)return i.Z.json({error:"Failed to create checkout URL"},{status:500});return i.Z.json({url:u.webUrl,checkoutId:u.id,totalPrice:u.totalPrice})}catch(e){return console.error("Checkout creation error:",e),i.Z.json({error:"Internal server error"},{status:500})}}let n=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/create-checkout/route",pathname:"/api/create-checkout",filename:"route",bundlePath:"app/api/create-checkout/route"},resolvedPagePath:"C:\\Users\\yuryd\\Downloads\\petal-scroll-boutique-main\\app\\api\\create-checkout\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:u,serverHooks:p,headerHooks:l,staticGenerationBailout:d}=n,h="/api/create-checkout/route"}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[997],()=>__webpack_exec__(6301));module.exports=t})();