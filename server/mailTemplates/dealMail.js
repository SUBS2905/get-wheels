
function generateDealTemplate(Name, customerEmail) {
    const dealTemplate = `
    
    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20gte%20mso%209%5D%3E%0A%3Cxml%3E%0A%20%20%3Co%3AOfficeDocumentSettings%3E%0A%20%20%20%20%3Co%3AAllowPNG%2F%3E%0A%20%20%20%20%3Co%3APixelsPerInch%3E96%3C%2Fo%3APixelsPerInch%3E%0A%20%20%3C%2Fo%3AOfficeDocumentSettings%3E%0A%3C%2Fxml%3E%0A%3C!%5Bendif%5D"> 
    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20!mso%5D%3E%3C!"> 
    <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D"> 
    <input name="cloudhq_backup_style_node" type="hidden" value="%0A%20%20%20%20%20%20%40media%20only%20screen%20and%20(min-width%3A%20620px)%20%7B%0A%20%20.u-row%20%7B%0A%20%20%20%20width%3A%20600px%20!important%3B%0A%20%20%7D%0A%20%20.u-row%20.u-col%20%7B%0A%20%20%20%20vertical-align%3A%20top%3B%0A%20%20%7D%0A%0A%20%20.u-row%20.u-col-100%20%7B%0A%20%20%20%20width%3A%20600px%20!important%3B%0A%20%20%7D%0A%0A%7D%0A%0A%40media%20(max-width%3A%20620px)%20%7B%0A%20%20.u-row-container%20%7B%0A%20%20%20%20max-width%3A%20100%25%20!important%3B%0A%20%20%20%20padding-left%3A%200px%20!important%3B%0A%20%20%20%20padding-right%3A%200px%20!important%3B%0A%20%20%7D%0A%20%20.u-row%20.u-col%20%7B%0A%20%20%20%20min-width%3A%20320px%20!important%3B%0A%20%20%20%20max-width%3A%20100%25%20!important%3B%0A%20%20%20%20display%3A%20block%20!important%3B%0A%20%20%7D%0A%20%20.u-row%20%7B%0A%20%20%20%20width%3A%20100%25%20!important%3B%0A%20%20%7D%0A%20%20.u-col%20%7B%0A%20%20%20%20width%3A%20100%25%20!important%3B%0A%20%20%7D%0A%20%20.u-col%20%3E%20div%20%7B%0A%20%20%20%20margin%3A%200%20auto%3B%0A%20%20%7D%0A%7D%0Abody%20%7B%0A%20%20margin%3A%200%3B%0A%20%20padding%3A%200%3B%0A%7D%0A%0Atable%2C%0Atr%2C%0Atd%20%7B%0A%20%20vertical-align%3A%20top%3B%0A%20%20border-collapse%3A%20collapse%3B%0A%7D%0A%0Ap%20%7B%0A%20%20margin%3A%200%3B%0A%7D%0A%0A.ie-container%20table%2C%0A.mso-container%20table%20%7B%0A%20%20table-layout%3A%20fixed%3B%0A%7D%0A%0A*%20%7B%0A%20%20line-height%3A%20inherit%3B%0A%7D%0A%0Aa%5Bx-apple-data-detectors%3D'true'%5D%20%7B%0A%20%20color%3A%20inherit%20!important%3B%0A%20%20text-decoration%3A%20none%20!important%3B%0A%7D%0A%0Atable%2C%20td%20%7B%20color%3A%20%23000000%3B%20%7D%20%23u_body%20a%20%7B%20color%3A%20%230000ee%3B%20text-decoration%3A%20underline%3B%20%7D%20%40media%20(max-width%3A%20480px)%20%7B%20%23u_content_text_11%20.v-container-padding-padding%20%7B%20padding%3A%2010px%2020px%2033px%20!important%3B%20%7D%20%7D%0A%20%20%20%20"> 
    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20!mso%5D%3E%3C!"> 
    <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D"> 
    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20IE%5D%3E%3Cdiv%20class%3D%22ie-container%22%3E%3C!%5Bendif%5D"> 
    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20mso%5D%3E%3Cdiv%20class%3D%22mso-container%22%3E%3C!%5Bendif%5D">
    <table id="u_body" style="border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; min-width: 320px; margin: 0 auto; background-color: #f9f9f9; width: 100%;" cellspacing="0" cellpadding="0">
    <tbody>
    <tr style="vertical-align: top;">
      <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;">
        <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctable%20width%3D%22100%25%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%3E%3Ctr%3E%3Ctd%20align%3D%22center%22%20style%3D%22background-color%3A%20%23f9f9f9%3B%22%3E%3C!%5Bendif%5D">
        <div class="u-row-container" style="padding: 0px; background-color: #eef3f0;">
          <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;">
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctable%20width%3D%22100%25%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%3E%3Ctr%3E%3Ctd%20style%3D%22padding%3A%200px%3Bbackground-color%3A%20%23eef3f0%3B%22%20align%3D%22center%22%3E%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%20style%3D%22width%3A600px%3B%22%3E%3Ctr%20style%3D%22background-color%3A%20%23ffffff%3B%22%3E%3C!%5Bendif%5D"> 
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20align%3D%22center%22%20width%3D%22600%22%20style%3D%22width%3A%20600px%3Bpadding%3A%200px%3Bborder-top%3A%200px%20solid%20transparent%3Bborder-left%3A%200px%20solid%20transparent%3Bborder-right%3A%200px%20solid%20transparent%3Bborder-bottom%3A%200px%20solid%20transparent%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
              <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
                <div style="height: 100%; width: 100% !important;">
                  <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(!mso)%26(!IE)%5D%3E%3C!">
                  <div style="box-sizing: border-box; height: 100%; padding: 0px; border: 0px solid transparent;">
                    <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D">
                    <table style="font-family: 'Cabin',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 0px; font-family: 'Cabin',sans-serif;" align="left">
                            <table border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="padding-right: 0px; padding-left: 0px;" align="center">
                                    <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: inline-block !important; border: nonest; height: auto; float: none; width: 100%; max-width: 600px;" title="" src="https://share1.cloudhq-mkt3.net/b3c295872db38e.png" alt="" width="600" align="center" border="0">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(!mso)%26(!IE)%5D%3E%3C!">
                  </div>
                  <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D">
                </div>
              </div>
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C%2Ftd%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C!%5Bendif%5D">
            </div>
          </div>
        </div>
        <div class="u-row-container" style="padding: 0px; background-color: #eef3f0;">
          <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;">
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctable%20width%3D%22100%25%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%3E%3Ctr%3E%3Ctd%20style%3D%22padding%3A%200px%3Bbackground-color%3A%20%23eef3f0%3B%22%20align%3D%22center%22%3E%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%20style%3D%22width%3A600px%3B%22%3E%3Ctr%20style%3D%22background-color%3A%20%23ffffff%3B%22%3E%3C!%5Bendif%5D"> 
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20align%3D%22center%22%20width%3D%22600%22%20style%3D%22width%3A%20600px%3Bpadding%3A%200px%3Bborder-top%3A%200px%20solid%20transparent%3Bborder-left%3A%200px%20solid%20transparent%3Bborder-right%3A%200px%20solid%20transparent%3Bborder-bottom%3A%200px%20solid%20transparent%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
              <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
                <div style="height: 100%; width: 100% !important;">
                  <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(!mso)%26(!IE)%5D%3E%3C!">
                  <div style="box-sizing: border-box; height: 100%; padding: 0px; border: 0px solid transparent;">
                    <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D">
                    <table style="font-family: 'Cabin',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 10px; font-family: 'Cabin',sans-serif;" align="left">
                            <table style="border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; border-top: 1px solid #BBBBBB; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                <tr style="vertical-align: top;">
                                  <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top; font-size: 0px; line-height: 0px; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <div style="text-align: left;">If you've received a message or a call from someone expressing interest in your vehicle, <strong>congratulations!</strong> This is a positive sign that you may be able to rent your vehicle quickly and easily.<br><br>Contactor Information: <br>Name: ${Name} <br> Email: ${customerEmail}<br></div>
                    </div>
                    <br>
                    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(!mso)%26(!IE)%5D%3E%3C!">
                  </div>
                  <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D">
                </div>
              </div>
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C%2Ftd%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C!%5Bendif%5D">
            </div>
          </div>
        </div>
        <div class="u-row-container" style="padding: 0px; background-color: #eef3f0;">
          <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;">
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctable%20width%3D%22100%25%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%3E%3Ctr%3E%3Ctd%20style%3D%22padding%3A%200px%3Bbackground-color%3A%20%23eef3f0%3B%22%20align%3D%22center%22%3E%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%20style%3D%22width%3A600px%3B%22%3E%3Ctr%20style%3D%22background-color%3A%20transparent%3B%22%3E%3C!%5Bendif%5D"> 
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20align%3D%22center%22%20width%3D%22600%22%20style%3D%22background-color%3A%20%23ffffff%3Bwidth%3A%20600px%3Bpadding%3A%200px%3Bborder-top%3A%200px%20solid%20transparent%3Bborder-left%3A%200px%20solid%20transparent%3Bborder-right%3A%200px%20solid%20transparent%3Bborder-bottom%3A%200px%20solid%20transparent%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
              <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
                <div style="background-color: #ffffff; height: 100%; width: 100% !important;">
                  <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(!mso)%26(!IE)%5D%3E%3C!">
                  <div style="box-sizing: border-box; height: 100%; padding: 0px; border: 0px solid transparent;">
                    <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D">
                    <table style="font-family: 'Cabin',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 10px; font-family: 'Cabin',sans-serif;" align="left">
                            <table style="border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; border-top: 1px solid #BBBBBB; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                <tr style="vertical-align: top;">
                                  <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top; font-size: 0px; line-height: 0px; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(!mso)%26(!IE)%5D%3E%3C!">
                  </div>
                  <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D">
                </div>
              </div>
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C%2Ftd%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C!%5Bendif%5D">
            </div>
          </div>
        </div>
        <div class="u-row-container" style="padding: 0px; background-color: #eef3f0;">
          <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;">
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctable%20width%3D%22100%25%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%3E%3Ctr%3E%3Ctd%20style%3D%22padding%3A%200px%3Bbackground-color%3A%20%23eef3f0%3B%22%20align%3D%22center%22%3E%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%20style%3D%22width%3A600px%3B%22%3E%3Ctr%20style%3D%22background-color%3A%20transparent%3B%22%3E%3C!%5Bendif%5D"> 
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20align%3D%22center%22%20width%3D%22600%22%20style%3D%22background-color%3A%20%23ffffff%3Bwidth%3A%20600px%3Bpadding%3A%200px%3Bborder-top%3A%200px%20solid%20transparent%3Bborder-left%3A%200px%20solid%20transparent%3Bborder-right%3A%200px%20solid%20transparent%3Bborder-bottom%3A%200px%20solid%20transparent%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
              <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
                <div style="background-color: #ffffff; height: 100%; width: 100% !important;">
                  <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(!mso)%26(!IE)%5D%3E%3C!">
                  <div style="box-sizing: border-box; height: 100%; padding: 0px; border: 0px solid transparent;">
                    <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D">
                    <table style="font-family: 'Cabin',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 7px; font-family: 'Cabin',sans-serif;" align="left">
                            <div align="center">
                              <div style="display: table; max-width: 214px;">
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctable%20width%3D%22214%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%3E%3Ctr%3E%3Ctd%20style%3D%22border-collapse%3Acollapse%3B%22%20align%3D%22center%22%3E%3Ctable%20width%3D%22100%25%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20border%3D%220%22%20style%3D%22border-collapse%3Acollapse%3B%20mso-table-lspace%3A%200pt%3Bmso-table-rspace%3A%200pt%3B%20width%3A214px%3B%22%3E%3Ctr%3E%3C!%5Bendif%5D"> 
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20width%3D%2232%22%20style%3D%22width%3A32px%3B%20padding-right%3A%2011px%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
                                <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 11px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr style="vertical-align: top;">
                                      <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle">
                                        <a href="https://twitter.com/d17012002" title="Twitter" target="_blank" rel="noopener">
                                          <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="Twitter" src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Twitter" width="32">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20width%3D%2232%22%20style%3D%22width%3A32px%3B%20padding-right%3A%2011px%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
                                <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 11px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr style="vertical-align: top;">
                                      <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle">
                                        <a href="https://www.linkedin.com/in/anshchauhan15/" title="LinkedIn" target="_blank" rel="noopener">
                                          <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="LinkedIn" src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="LinkedIn" width="32">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20width%3D%2232%22%20style%3D%22width%3A32px%3B%20padding-right%3A%2011px%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
                                <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 11px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr style="vertical-align: top;">
                                      <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle">
                                        <a href="the4musketeeers@gmail.com" title="Email" target="_blank" rel="noopener">
                                          <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="Email" src="https://cdn.tools.unlayer.com/social/icons/rounded/email.png" alt="Email" width="32">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20width%3D%2232%22%20style%3D%22width%3A32px%3B%20padding-right%3A%2011px%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
                                <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 11px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr style="vertical-align: top;">
                                      <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle">
                                        <a href="https://github.com/SUBS2905/get-wheels" title="GitHub" target="_blank" rel="noopener">
                                          <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="GitHub" src="https://cdn.tools.unlayer.com/social/icons/rounded/github.png" alt="GitHub" width="32">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3Ctd%20width%3D%2232%22%20style%3D%22width%3A32px%3B%20padding-right%3A%200px%3B%22%20valign%3D%22top%22%3E%3C!%5Bendif%5D">
                                <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 0px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr style="vertical-align: top;">
                                      <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle">
                                        <a href="https://www.instagram.com/_anantdubey_/" title="Instagram" target="_blank" rel="noopener">
                                          <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="Instagram" src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="Instagram" width="32">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
                                <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C%2Ftd%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C!%5Bendif%5D">
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table style="font-family: 'Cabin',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 10px 10px 20px; font-family: 'Cabin',sans-serif;" align="left">
                            <div style="color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                              <p style="font-size: 14px; line-height: 180%; margin: 0px;">
                                <span style="font-size: 10px; line-height: 18px; font-family: Lato, sans-serif; color: #000000;">Copyrights © get-Wheels All Rights Reserved</span>
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(!mso)%26(!IE)%5D%3E%3C!">
                  </div>
                  <input name="cloudhq_backup_comment_node" type="hidden" value="%3C!%5Bendif%5D">
                </div>
              </div>
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C!%5Bendif%5D"> 
              <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C%2Ftd%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C!%5Bendif%5D">
            </div>
          </div>
        </div>
        <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20(mso)%7C(IE)%5D%3E%3C%2Ftd%3E%3C%2Ftr%3E%3C%2Ftable%3E%3C!%5Bendif%5D">
      </td>
    </tr>
    </tbody>
    </table>
    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20mso%5D%3E%3C%2Fdiv%3E%3C!%5Bendif%5D"> 
    <input name="cloudhq_backup_comment_node" type="hidden" value="%5Bif%20IE%5D%3E%3C%2Fdiv%3E%3C!%5Bendif%5D">
    <div id="chq_gmail_templates_create_your_template_div" style="width: 100%;" contenteditable="false">
    <div style="user-select: none; border-top: 1px solid #eeeeee; width: fit-content; margin-top: 25px; margin-bottom: 10px; cursor: pointer; font-size: 10px;" contenteditable="false">
    <table style="margin: 0px; padding: 0px;" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td>Create and share beautiful 
            <strong>email templates</strong>
          </td>
          <td>
            <div style="margin-left: 5px; margin-top: 0px; display: none;">
              <div class="cross" style="float: left; cursor: pointer; font-size: 8px; transform: rotate(-180deg); transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease;">x</div>
              <div class="remove_txt" style="float: left; cursor: pointer; visibility: hidden; font-size: 8px; opacity: 0; transition: visibility 0.15s linear,opacity 0.15s linear; margin-left: 3px;">REMOVE</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
    `
   return dealTemplate;
}

module.exports = {generateDealTemplate};