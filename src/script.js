const envelope = document.getElementById("envelope");
const invite = document.getElementById("invite");
const openBtn = document.getElementById("openBtn");

window.onload = () => {

    // volta para o topo
    window.scrollTo(0, 0);

    // bloqueia o scroll
    document.body.style.overflowY = "hidden";

};


if (openBtn && envelope && invite) {

    openBtn.addEventListener("click", () => {

        envelope.classList.add("open");

        setTimeout(() => {

            envelope.style.opacity = "0";

            setTimeout(() => {

                envelope.style.display = "none";
                invite.classList.add("show");

                document.body.style.overflowY = "auto";

            }, 600);

        }, 1800);

    });

}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".presente-cards").forEach(card => {

        const btnDoar = card.querySelector(".caridade");
        const btnCopiar = card.querySelector(".copiar-pix");
        const btnVoltar = card.querySelector(".voltar");

        // Abrir QRCode
        btnDoar.addEventListener("click", () => {
            card.classList.add("active");
        });

        // Voltar
        btnVoltar.addEventListener("click", () => {
            card.classList.remove("active");
        });

        // Copiar PIX
        btnCopiar.addEventListener("click", () => {

            const chavePix =
                card.querySelector(".pix-chave").innerText;

            navigator.clipboard.writeText(chavePix);

            const textoOriginal =
                btnCopiar.innerText;

            btnCopiar.innerText =
                "PIX Copiado ✓";

            setTimeout(() => {
                btnCopiar.innerText =
                    textoOriginal;
            }, 2000);

        });

    });

});