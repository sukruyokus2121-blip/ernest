const fs = require('fs');

const content = fs.readFileSync('./Ernestsoft.com/index.html', 'utf8');

const search = '    <!-- End Our Goal -->\n    <!-- İletişim ============================================= -->';

const replace = `    <!-- End Our Goal -->

<style>
/* PREMIUM TESTIMONIALS */
.testimonials-premium {
    padding: 80px 0;
    background: #f8fafc;
}
.testi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-top: 40px;
}
.testi-card {
    background: #ffffff;
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    position: relative;
    border: 1px solid rgba(0,0,0,0.06);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.testi-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(91,91,255,0.12);
    border-color: rgba(91,91,255,0.1);
}
.testi-card .quote-icon {
    font-size: 38px;
    color: #5b5bff;
    opacity: 0.15;
    position: absolute;
    top: 30px;
    right: 30px;
}
.testi-card p {
    font-size: 15px;
    line-height: 1.7;
    color: #475569;
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
    font-style: italic;
}
.testi-author h4 {
    font-size: 18px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 4px;
}
.testi-author span {
    font-size: 13px;
    color: #5b5bff;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.site-heading h2 span {
    color: #5b5bff;
}
</style>

    <!-- Start Testimonials -->
    <div id="testimonials" class="testimonials-premium">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="site-heading text-center">
                        <h2>Client <span>Feedback</span></h2>
                        <span class="devider"></span>
                        <p>
                            What our partners and clients say about our bespoke software and blockchain solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="testi-grid">
                        
                        <!-- Item 1 -->
                        <div class="testi-card">
                            <i class="fas fa-quote-right quote-icon"></i>
                            <p>
                                "ErnestSoft transformed our ideas into a functional, highly secure blockchain application faster than we expected. Their team's expertise is unmatched."
                            </p>
                            <div class="testi-author">
                                <h4>John Doe</h4>
                                <span>CEO, TechVision</span>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="testi-card">
                            <i class="fas fa-quote-right quote-icon"></i>
                            <p>
                                "The mobile app they delivered is flawless. They were communicative throughout the entire process. Security is top notch. Highly recommended!"
                            </p>
                            <div class="testi-author">
                                <h4>Sarah Jenkins</h4>
                                <span>Founder, Appify</span>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="testi-card">
                            <i class="fas fa-quote-right quote-icon"></i>
                            <p>
                                "We needed a scalable web solution and ErnestSoft provided just that. Their dedication to quality and performance is truly commendable."
                            </p>
                            <div class="testi-author">
                                <h4>Michael Smith</h4>
                                <span>CTO, Innovate Solutions</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Testimonials -->
    <!-- İletişim ============================================= -->`;

if (content.indexOf(search) !== -1) {
    fs.writeFileSync('./Ernestsoft.com/index.html', content.replace(search, replace));
    console.log('Testimonials added successfully.');
} else {
    // maybe \r\n
    const search2 = '    <!-- End Our Goal -->\r\n    <!-- İletişim ============================================= -->';
    if (content.indexOf(search2) !== -1) {
        fs.writeFileSync('./Ernestsoft.com/index.html', content.replace(search2, replace));
        console.log('Testimonials added successfully. (CRLF)');
    } else {
        console.log('Search string not found!');
    }
}
