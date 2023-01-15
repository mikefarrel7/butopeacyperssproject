describe('butpeacheck', () => {


    


  

        it("square_check_button_and_text", () => {


            cy.on('uncaught:exception', (err, runnable) => {

                return false
    
            })

            cy.visit("https://butopea.com");
            cy.get(".banner-square-overlay-container").then(()=>{
    
                if(cy.get(".banner-square-overlay p").should('be.visible') && cy.get(".banner-square-overlay button").should('be.visible'))
                {
                    cy.get(".banner-square-overlay p").should('be.visible').invoke('text').then((text)=>{
                        cy.log(text);
                    })
    
                    cy.get(".banner-square-overlay button").should('be.visible').invoke('text').then((text)=>{
                        cy.log(text);
                    })
                }
    
            })
        })
        it("square_contains_image", () => {

            cy.on('uncaught:exception', (err, runnable) => {

                return false
    
            })
    
            cy.visit("https://butopea.com");
            cy.xpath("(//div[@class='banner-square-column p0 col-xs-12 col-md-4 relative'])[3]").find('img').invoke('attr','src').then((firstSrc)=>{
                const src1 = firstSrc;
                cy.log(src1)
            })
    
        });


        it("new_product_check", () => {

            cy.visit("https://butopea.com");
            cy.xpath("(//div[@class='col-xs-4 tab inactive'])[2]").should('contain','Új termékek').click().then(()=>{

                // cy.xpath("//div[@id='new-arrivals']").find('.new-collection').find('.row').find('.product-listing').find('.col-sm-6').find('.product-image').find('.preview-img-item').invoke('attr','src').then((firstSrc)=>
                // {
                //     cy.log(firstSrc)
                // })

                cy.xpath("//div[@id='new-arrivals']").find('.new-collection').find('.row').find('.product-listing').should('have.length.greaterThan',0).then((el)=>{

                cy.get(el).find('.col-sm-6').each((el2)=>{
                    cy.get(el2).find('.product-image').find('.preview-img-item').should('have.attr','src').then(attribute => cy.log(attribute))
                    cy.get(el2).find('.product-link').should('have.attr','href').then(attribute => cy.log(attribute))
                    cy.get(el2).find('.product-tile-info').find('.product-name').invoke('text').then(attr => cy.log(attr))
                    cy.get(el2).find('.product-tile-info').find('.product-name').next('div').invoke('text').then(attr=>cy.log(attr))
                })
                        // cy.get(el).find('.col-sm-6').find('.product-image').find('.preview-img-item').each((el2) => {
                        //     cy.get(el2).should('have.attr','src').then(attribute => cy.log(attribute))
                        // })

                        // cy.xpath("//div[@id='new-arrivals']").find('.new-collection').find('.row').find('.product-listing').find('.col-sm-6').find('.product-link').each((el) => {
                        //     cy.get(el).should('have.attr','href').then(attribute => cy.log(attribute))
                        // })


                });
            })
            // cy.get('button').should('contain','Új termékek').then(()=>
            // {
                
            //     cy.xpath("//div[@id='new-arrivals']").find('div["col-sm-6"]').should('have.length' > 0).find('img').invoke('attr','src').then((firstSrc) =>{
            //         const src1 = firstSrc;
            //         cy.log(src1);
            //     })
            // })
            
        })

    

});