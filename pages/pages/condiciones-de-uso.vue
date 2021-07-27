<template lang="pug">
  .page-template.custom-page(data-section-id='page-template' data-section-type='page-template')
    div
      .row
        .medium-10.large-9.columns.custom-page__content.medium-centered.large-centered
          .rte
            h3 {{ $t('Al utilizar esta página web o hacer un pedido a través de la misma, consientes en estar vinculado por estas Condiciones a BOXIFY S.L., con ubicación en Calle de Orense 24, 1 en representación de BOXIFY, como marca comercial. Si no estás de acuerdo con las condiciones expuestas, te rogamos no uses esta página web.') }}
            p &nbsp;
            h3 {{ $t('USO DE NUESTRA PáGINA WEB') }}
            br
            | {{ $t('Al hacer uso de esta página web y/o realizar pedidos a través de la misma usted el usuario se compromete a:') }}
            br
            br
            | {{ $t('Hacer uso de esta página web únicamente para realizar consultas o pedidos legalmente válidos. No realizar ningún pedido falso o fraudulento. Si razonablemente se pudiera considerar que se ha hecho un pedido de esta índole estaremos autorizados a anularlo e informar a las autoridades pertinentes. Facilitarnos tu dirección de correo electrónico, dirección postal y/u otros datos de contacto de forma veraz y exacta. Asimismo, consientes que podremos hacer uso de dicha información para ponernos en contacto contigo y hacer promociones. Al realizar un pedido a través de esta página web, usted declara ser mayor de 18 años y tener capacidad legal para celebrar contratos.') }}
            br
            h3 {{ $t('SISTEMA DE COMPRAS') }}
            br
            | {{ $t('Las compras realizadas en esta web quedan sometidas a la normativa española y comunitaria vigente al respecto.') }}
            br
            br
            | {{ $t('Las compras efectuadas estarán sujetas al pago del Impuesto sobre el Valor Añadido (IVA.), según lo establecido en la normativa vigente para las personas físicas o jurídicas residentes en Estados miembros de la Unión Europea y para aquellas personas residentes en países extracomunitarios. Exceptuando las comunidades o países que según su normativa están exentos de IVA.') }}
            br
            h3 {{ $t('VENTA DE SALUDOS PERSONALIZADOS') }}
            p
              br
              | {{ $t('Los precios expuestos en esta web son en Euros e incluyen el I.V.A. (excepto en los casos en los que se indique claramente lo contrario). Dicho impuesto quedará reflejado en el precio final, de forma desglosada, como se podrá comprobar en su albarán correspondiente, excepto en los casos que por ley no sea de aplicación el mismo.') }}
              br
              br
              | {{ $t('El fabricante o fabricantes de BOXIFY (marca comercial representada por BOXIFY S.L.) se reservan el derecho de modificar las especificaciones sin previo aviso, intentando mantener el mismo estándar de calidad, o superior. Las características de los productos y sus precios aparecerán en pantalla.') }}
              br
              br
              | {{ $t('Una vez hecho el pedido a través de nuestra web, automáticamente se le enviará por email una confirmación de pedido con los datos consignados. La confirmación de pedido enviada por BOXIFY no tiene validez como factura, sólo como comprobante de compra. Como cliente, al aceptar los términos y condiciones, también aceptas recibir información sobre nuestros productos en el correo electrónico con el cual te registraste. Aún así puedes darte de baja por medio de un link incluido en tales emails, o enviando un email a info@boxify.es desde la dirección de email que quiere dar de baja con el asunto de mensaje "Baja newsletter".') }}
            p &nbsp;
            h3 {{ $t('DISPONIBILIDAD DEL SERVICIO') }}
            p
              br
              | {{ $t('Los artículos que se ofrecen a través de esta página web están disponibles para su compra y envío para la UE así como en territorio español (excepto Canarias, Ceuta y Melilla).') }}
            p &nbsp;
            h3 {{ $t('CELEBRACIóN DEL CONTRATO') }}
            br
            | {{ $t('El contrato se perfecciona cuando se introducen los datos personales en la web para efectuar la compra del producto y proceder al pago del mismo.') }}
            br
            br
            | {{ $t('Para realizar un pedido, deberá seguir el procedimiento de compra online y hacer clic en "Continuar", en el apartado información de pago. Tras esto, recibirá un correo electrónico acusando recibo de su pedido la "Confirmación de Pedido".') }}
            br
            br
            | {{ $t('Serán objeto del Contrato únicamente aquellos productos relacionados en la Confirmación de Envío.') }}
            br
            h3 {{ $t('ENTREGA') }}
            br
            | {{ $t('Sin perjuicio de lo establecido en la cláusula anterior respecto de la disponibilidad de los productos y salvo que se produzcan circunstancias extraordinarias, enviaremos el pedido en un plazo de entre 1 y 4 días laborables ajustada al calendario laboral de la Comunidad de Madrid desde la Confirmación de Pedido. El servicio de entrega será el acordado a través de nuestra página web cuando se realiza el pedido. En cualquier caso este servicio está sujeto en todo momento a la capacidad de entrega de la empresa de mensajería y en ningún caso BOXIFY SL es responsable de la entrega del paquete fuera del servicio seleccionado. BOXIFY SL pone a disposición de los clientes todos los medios posibles para que el paquete se entregue lo antes posible.') }}
            br
            br
            | {{ $t('Si por algún motivo no pudiésemos cumplir con la fecha de entrega, te informaremos de esta circunstancia y daremos la opción de seguir adelante con la compra estableciendo una nueva fecha de entrega o bien de anular el pedido con el reembolso total del precio pagado. No realizamos entregas los sábados, domingos y festivos.') }}
            br
            br
            | {{ $t('A efectos de las presentes Condiciones, se entenderá que se ha producido la "entrega" o que el pedido ha sido entregado en el momento de firmar la recepción del mismo en la dirección de entrega convenida.') }}
            br
            br
            h3
              strong {{ $t('IMPOSIBILIDAD DE ENTREGA') }}
            p
              br
              | {{ $t('En caso de imposibilidad continua de entregar el paquete y sin tener ninguna otra notificación por parte del cliente, el producto, al tratarse de BOXIFY SL producto personalizado, no está sujeto a políticas de devolución, y se custodiará en el centro de distribución de BOXIFY SL y trataremos de ponernos en contacto con el cliente para acordar otro lugar de entrega. En este caso, en esta segunda entrega, los gastos de envío serán a cargo del cliente.') }}
            p &nbsp;
            h3 {{ $t('PRECIO Y PAGO') }}
            p
              | {{ $t('A pesar de que intentamos asegurarnos de que todos los precios que figuran en la página son correctos, pueden producirse errores. Si descubriésemos un error en el precio de alguno de los productos que hayas encargado, te informaremos lo antes posible y te daremos la opción de reconfirmar su pedido al precio correcto o bien anularlo.') }}
              br
              br
              | {{ $t('Los precios de esta página web incluyen IVA. Los gastos de envío son gratuitos aunque están sujetos a cualquier modificación o promoción por parte de BOXIFY.') }}
              br
              br
              | {{ $t('Los precios pueden cambiar en cualquier momento, pero (salvo en lo establecido anteriormente) los posibles cambios no afectarán a los pedidos con respecto a los que ya hayamos enviado una Confirmación de Envío.') }}
              br
              br
              | {{ $t('Una vez que hayas efectuado la compra, todos los artículos que deseas comprar se habrán añadido previamente al carrito y aceptado las condiciones generales para la compra.') }}
              br
              br
              | {{ $t('Podrás hacer el pago con paypal, tarjeta de crédito o transferencia bancaria.') }}
              br
              br
              | {{ $t('Las tarjetas de crédito estarán sujetas a comprobaciones y autorizaciones por parte de la entidad emisora de las mismas, pero si dicha entidad no autorizase el pago, no nos haremos responsables por ningún retraso o falta de entrega y no podremos formalizar ningún Contrato.') }}
              br
              br
              | {{ $t('IMPUESTO SOBRE EL VALOR AñADIDO') }}
              br
              br
              | {{ $t('De conformidad con lo dispuesto en el artículo 68 de la Ley 37/1992, de 28 de diciembre, del Impuesto sobre el Valor Añadido, la entrega de los artículos se entenderá localizada en el territorio de aplicación del IVA español. El tipo de IVA aplicable será el legalmente vigente en cada momento en función del artículo concreto de que se trate.') }}
            p &nbsp;
            h3 {{ $t('POLíTICA DE CAMBIOS/DEVOLUCIONES') }}
            br
            | {{ $t('Por tratarse de un producto personalizado por el usuario, solo aceptaremos cambios o devoluciones en caso de:') }}
            br
            br
            | * {{ $t('Error o defecto por parte de BOXIFY en la impresión') }}
            br
            br
            | * {{ $t('Error o defecto por parte de BOXIFY en el artículo de regalo') }}
            br
            br
            | * {{ $t('Pedido dañado en el transporte') }}
            br
            br
            | {{ $t('Para cualquier otra incidencia, consulta o información necesaria puedes contactarnos en el correo info@boxify.es') }}

</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t('Condiciones de uso')} - Boxify`,
    }
  },
}
</script>
