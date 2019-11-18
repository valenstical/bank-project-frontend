$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("Components", "Components");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "Components";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Summary Box 2');
        comp_comp1.code = '<div class="row mt-5 d-none" data-pg-collapsed>\
    <div class="col-lg-12 col-xl-8" data-pg-collapsed>\
        <div class="bg-white summary position-relative">\
            <div data-pg-collapsed>\
                <h4 class="summary-title">Account Balance</h4>\
                <h5 class="summary-amount font-weight-bold balance">&#8358; 777,777,777.00 <a href="transfer.html" class="float-right">Transfer fund</a></h5>\
                <small class="summary-count d-inline-block mt-4 ">42 Transactions</small>\
            </div>\
        </div>                  \
    </div>\
    <div class="col-sm-6 col-xl-4">\
        <div class="bg-white summary position-relative pb-4 pt-4" data-pg-collapsed>\
            <div class="transaction-badge text-center " data-pg-collapsed>\
                <i class="fas fa-arrow-down"></i>\
            </div>\
            <div data-pg-collapsed class="ml-4 pl-1">\
                <h4 class="summary-title">Credits</h4>\
                <h5 class="summary-amount font-weight-bold">&#8358; 777,777,777.00</h5>\
            </div>\
        </div>\
        <div class="bg-white summary position-relative bg-red-light pt-4 pb-4 mt-1" data-pg-collapsed>\
            <div class="transaction-badge text-center transaction-badge-red" data-pg-collapsed>\
                <i class="fas fa-arrow-up"></i>\
            </div>\
            <div data-pg-collapsed class="ml-4 pl-1">\
                <h4 class="summary-title">Debits</h4>\
                <h5 class="summary-amount font-weight-bold">&#8358; 777,777,777.00</h5>\
            </div>\
        </div>                  \
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / Column');
        comp_comp2.code = '<div class="col-12" data-pg-collapsed>\
    <div class="bg-white summary">\
        <div class="row">\
            <div class="col-sm-6" data-pg-collapsed>\
                <h4 class="summary-title">Account Balance</h4>\
                <h5 class="summary-amount font-weight-bold">&#8358; 777,777,777.00</h5>\
                <small class="summary-count d-inline-block mt-3">42 Transactions</small> \
            </div>\
            <div class="col-sm-6 text-center text-sm-right" data-pg-collapsed>\
                <button type="submit" class="btn login-btn text-white font-weight-bold mt-4 btn-rounded d-sm-inline-block">\
                    TRANSFER FUND\
</button>                 \
            </div>\
        </div>\
    </div>     \
</div>';
        comp_comp2.parent_selector = '.row';
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("Components_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2]);

        f.addLibSection(section);
   });
});