import TableHead from "./TableHead";
import TableComponent from "./TableComponent";

export default function Table() {
    return (
    <div class="card-body">
        <table id="datatablesSimple" class="table table-bordered">
        <thead>
            <TableHead name="Name" position="Position" office="Office" age="Age" start_date="Start date" salary="Salary" />
        </thead>
        <tfoot>
            <TableHead name="Name" position="Position" office="Office" age="Age" start_date="Start date" salary="Salary" />
        </tfoot>
        <tbody>
            <TableComponent name="Tiger Nixon" position="System Architect" office="Edinburgh" age="61" start_date="2011/04/25" salary="$320,800" />
            <TableComponent name="Garrett Winters" position="Accountant" office="Tokyo" age="63" start_date="2011/07/25" salary="$170,750" />
            <TableComponent name="Ashton Cox" position="Junior Technical Author" office="San Francisco" age="66" start_date="2009/01/12" salary="$86,000" />
                    <TableComponent name="Cedric Kelly" position="Senior Javascript Developer" office="Edinburgh" age="22" start_date="2012/03/29" salary="$433,060" />
                    <TableComponent name="Airi Satou" position="Accountant" office="Tokyo" age="33" start_date="2008/11/28" salary="$162,700" />
                    <TableComponent name="Brielle Williamson" position="Integration Specialist" office="New York" age="61" start_date="2012/12/02" salary="$372,000" />
                    <TableComponent name="Herrod Chandler" position="Sales Assistant" office="San Francisco" age="59" start_date="2012/08/06" salary="$137,500" />
                    <TableComponent name="Rhona Davidson" position="Integration Specialist" office="Tokyo" age="55" start_date="2010/10/14" salary="$327,900" />
                    <TableComponent name="Colleen Hurst" position="Javascript Developer" office="San Francisco" age="39" start_date="2009/09/15" salary="$205,500" />
                    <TableComponent name="Sonya Frost" position="Software Engineer" office="Edinburgh" age="23" start_date="2008/12/13" salary="$103,600" />
                    <TableComponent name="Jena Gaines" position="Office Manager" office="London" age="30" start_date="2008/12/19" salary="$90,560" />
                    <TableComponent name="Quinn Flynn" position="Support Lead" office="Edinburgh" age="22" start_date="2013/03/03" salary="$342,000" />
                    <TableComponent name="Charde Marshall" position="Regional Director" office="San Francisco" age="36" start_date="2008/10/16" salary="$470,600" />
                    <TableComponent name="Haley Kennedy" position="Senior Marketing Designer" office="London" age="43" start_date="2012/12/18" salary="$313,500" />
                    <TableComponent name="Tatyana Fitzpatrick" position="Regional Director" office="London" age="19" start_date="2010/03/17" salary="$385,750" />
                    <TableComponent name="Michael Silva" position="Marketing Designer" office="London" age="66" start_date="2012/11/27" salary="$198,500" />
                    <TableComponent name="Paul Byrd" position="Chief Financial Officer (CFO)" office="New York" age="64" start_date="2010/06/09" salary="$725,000" />
                    <TableComponent name="Gloria Little" position="Systems Administrator" office="New York" age="59" start_date="2009/04/10" salary="$237,500" />
                    <TableComponent name="Bradley Greer" position="Software Engineer" office="London" age="41" start_date="2012/10/13" salary="$132,000" />
                    <TableComponent name="Dai Rios" position="Personnel Lead" office="Edinburgh" age="35" start_date="2012/09/26" salary="$217,500" />
                    <TableComponent name="Jenette Caldwell" position="Development Lead" office="New York" age="30" start_date="2011/09/03" salary="$345,000" />
                    <TableComponent name="Yuri Berry" position="Chief Marketing Officer (CMO)" office="New York" age="40" start_date="2009/06/25" salary="$675,000" />
                    <TableComponent name="Caesar Vance" position="Pre-Sales Support" office="New York" age="21" start_date="2011/12/12" salary="$106,450" />
                    <TableComponent name="Doris Wilder" position="Sales Assistant" office="Sidney" age="23" start_date="2010/09/20" salary="$85,600" />
                    <TableComponent name="Angelica Ramos" position="Chief Executive Officer (CEO)" office="London" age="47" start_date="2009/10/09" salary="$1,200,000" />
                    <TableComponent name="Gavin Joyce" position="Developer" office="Edinburgh" age="42" start_date="2010/12/22" salary="$92,575" />
                    <TableComponent name="Jennifer Chang" position="Regional Director" office="Singapore" age="28" start_date="2010/11/14" salary="$357,650" />
                    <TableComponent name="Brenden Wagner" position="Software Engineer" office="San Francisco" age="28" start_date="2011/06/07" salary="$206,850" />
                    <TableComponent name="Fiona Green" position="Chief Operating Officer (COO)" office="San Francisco" age="48" start_date="2010/03/11" salary="$850,000" />
                    <TableComponent name="Shou Itou" position="Regional Marketing" office="Tokyo" age="20" start_date="2011/08/14" salary="$163,000" />
                    <TableComponent name="Michelle House" position="Integration Specialist" office="Sidney" age="37" start_date="2011/06/02" salary="$95,400" />
                    <TableComponent name="Suki Burks" position="Developer" office="London" age="53" start_date="2009/10/22" salary="$114,500" />
                    <TableComponent name="Prescott Bartlett" position="Technical Author" office="London" age="27" start_date="2011/05/07" salary="$145,000" />
                    <TableComponent name="Gavin Cortez" position="Team Leader" office="San Francisco" age="22" start_date="2008/10/26" salary="$235,500" />
                    <TableComponent name="Martena Mccray" position="Post-Sales support" office="Edinburgh" age="46" start_date="2011/03/09" salary="$324,050" />
                    <TableComponent name="Unity Butler" position="Marketing Designer" office="San Francisco" age="47" start_date="2009/12/09" salary="$85,675" />
                    <TableComponent name="Howard Hatfield" position="Office Manager" office="San Francisco" age="51" start_date="2008/12/16" salary="$164,500" />
                    <TableComponent name="Hope Fuentes" position="Secretary" office="San Francisco" age="41" start_date="2010/02/12" salary="$109,850" />
                    <TableComponent name="Vivian Harrell" position="Financial Controller" office="San Francisco" age="62" start_date="2009/02/14" salary="$452,500" />
                    <TableComponent name="Timothy Mooney" position="Office Manager" office="London" age="37" start_date="2008/12/11" salary="$136,200" />
                    <TableComponent name="Jackson Bradshaw" position="Director" office="New York" age="65" start_date="2008/09/26" salary="$645,750" />
                    <TableComponent name="Olivia Liang" position="Support Engineer" office="Singapore" age="64" start_date="2011/02/03" salary="$234,500" />
                    <TableComponent name="Bruno Nash" position="Software Engineer" office="London" age="38" start_date="2011/05/03" salary="$163,500" />
                    <TableComponent name="Sakura Yamamoto" position="Support Engineer" office="Tokyo" age="37" start_date="2009/08/19" salary="$139,575" />
                    <TableComponent name="Thor Walton" position="Developer" office="New York" age="61" start_date="2013/08/11" salary="$98,540" />
                    <TableComponent name="Finn Camacho" position="Support Engineer" office="San Francisco" age="47" start_date="2009/07/07" salary="$87,500" />
                    <TableComponent name="Serge Baldwin" position="Data Coordinator" office="Singapore" age="64" start_date="2012/04/09" salary="$138,575" />
                    <TableComponent name="Zenaida Frank" position="Software Engineer" office="New York" age="63" start_date="2010/01/04" salary="$125,250" />
                    <TableComponent name="Zorita Serrano" position="Software Engineer" office="San Francisco" age="56" start_date="2012/06/01" salary="$115,000" />
                    <TableComponent name="Jennifer Acosta" position="Junior Javascript Developer" office="Edinburgh" age="43" start_date="2013/02/01" salary="$75,650" />
                    <TableComponent name="Cara Stevens" position="Sales Assistant" office="New York" age="46" start_date="2011/12/06" salary="$145,600" />
                    <TableComponent name="Hermione Butler" position="Regional Director" office="London" age="47" start_date="2011/03/21" salary="$356,250" />
                    <TableComponent name="Lael Greer" position="Systems Administrator" office="London" age="21" start_date="2009/02/27" salary="$103,500" />
                    <TableComponent name="Jonas Alexander" position="Developer" office="San Francisco" age="30" start_date="2010/07/14" salary="$86,500" />
                    <TableComponent name="Shad Decker" position="Regional Director" office="Edinburgh" age="51" start_date="2008/11/13" salary="$183,000" />
                    <TableComponent name="Michael Bruce" position="Javascript Developer" office="Singapore" age="29" start_date="2011/06/27" salary="$183,000" />
                    <TableComponent name="Donna Snider" position="Customer Support" office="New York" age="27" start_date="2011/01/25" salary="$112,000" />   
            </tbody>
            </table>
        </div>
    );
}
