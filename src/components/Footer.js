let footer = document.querySelector("#footerText");

const Footer = () => {
    let footerContent;
    footerContent=`
    <hr style="border-top: 1px solid black;">
    <div class="row">
        
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="text-align: left">
            <h3>Contacter les developpeurs :</h2>
            <div>Anthony De Leener : <a href="mailto:anthony.deleener@student.vinci.be">anthony.deleener@student.vinci.be</a></div>
            <div>Joachim Renard : <a href="mailto:joachim.renard@student.vinci.be">joachim.renard@student.vinci.be</a></div>
            <div>Thibaut Gérard : <a href="mailto:thibaut.t.gerard@student.vinci.be">thibaut.t.gerard@student.vinci.be</a></div>
            <div>Chih Huai Lin : <a href="mailto:chihhuai.lin@student.vinci.be">chihhuai.lin@student.vinci.be</a></div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="text-align: center">
            <img src="./assets/symble-logo.png" alt="Logo Symble" style="height: 10vh;">
            <div id="gdpr"><a class="nav-item nav-link" href="#" data-uri="/conditions">Conditions générales d'utilisation</a></div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="text-align: right">
            <h3>Contenu issu de :</h2>
            <div>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    </div>`

    return (footer.innerHTML = footerContent);
}

export default Footer;