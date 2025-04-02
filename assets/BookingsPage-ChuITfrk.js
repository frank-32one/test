import{j as t,a as e,r as n,B as r,c as a}from"./index-BaW1cT8h.js";const o=6048e5,i=Symbol.for("constructDateFrom");function s(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&i in t?t[i](e):t instanceof Date?new t.constructor(e):new Date(e)}function u(t,e){return s(e||t,t)}let c={};function d(){return c}function l(t,e){var n,r,a,o;const i=d(),s=(null==e?void 0:e.weekStartsOn)??(null==(r=null==(n=null==e?void 0:e.locale)?void 0:n.options)?void 0:r.weekStartsOn)??i.weekStartsOn??(null==(o=null==(a=i.locale)?void 0:a.options)?void 0:o.weekStartsOn)??0,c=u(t,null==e?void 0:e.in),l=c.getDay(),h=(l<s?7:0)+l-s;return c.setDate(c.getDate()-h),c.setHours(0,0,0,0),c}function h(t,e){return l(t,{...e,weekStartsOn:1})}function m(t,e){const n=u(t,null==e?void 0:e.in),r=n.getFullYear(),a=s(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=h(a),i=s(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const c=h(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function f(t){const e=u(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function g(t,e){const n=u(t,null==e?void 0:e.in);return n.setHours(0,0,0,0),n}function w(t,e,n){const[r,a]=function(t,...e){const n=s.bind(null,e.find((t=>"object"==typeof t)));return e.map(n)}(null==n||n.in,t,e),o=g(r),i=g(a),u=+o-f(o),c=+i-f(i);return Math.round((u-c)/864e5)}function b(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+u(t)));var e}const y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function x(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const p={date:x({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:x({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:x({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(t){return(e,n)=>{let r;if("formatting"===((null==n?void 0:n.context)?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=(null==n?void 0:n.width)?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=(null==n?void 0:n.width)?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function k(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(s,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(s,(t=>t.test(i)));let c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;return{value:c,rest:e.slice(i.length)}}}var j;const P={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=y[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),(null==n?void 0:n.addSuffix)?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:p,formatRelative:(t,e,n,r)=>v[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(j.matchPattern);if(!n)return null;const r=n[0],a=t.match(j.parsePattern);if(!a)return null;let o=j.valueCallback?j.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function S(t,e){const n=u(t,null==e?void 0:e.in),r=w(n,function(t,e){const n=u(t,null==e?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n));return r+1}function N(t,e){const n=u(t,null==e?void 0:e.in),r=+h(n)-+function(t,e){const n=m(t,e),r=s(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),h(r)}(n);return Math.round(r/o)+1}function D(t,e){var n,r,a,o;const i=u(t,null==e?void 0:e.in),c=i.getFullYear(),h=d(),m=(null==e?void 0:e.firstWeekContainsDate)??(null==(r=null==(n=null==e?void 0:e.locale)?void 0:n.options)?void 0:r.firstWeekContainsDate)??h.firstWeekContainsDate??(null==(o=null==(a=h.locale)?void 0:a.options)?void 0:o.firstWeekContainsDate)??1,f=s((null==e?void 0:e.in)||t,0);f.setFullYear(c+1,0,m),f.setHours(0,0,0,0);const g=l(f,e),w=s((null==e?void 0:e.in)||t,0);w.setFullYear(c,0,m),w.setHours(0,0,0,0);const b=l(w,e);return+i>=+g?c+1:+i>=+b?c:c-1}function W(t,e){const n=u(t,null==e?void 0:e.in),r=+l(n,e)-+function(t,e){var n,r,a,o;const i=d(),u=(null==e?void 0:e.firstWeekContainsDate)??(null==(r=null==(n=null==e?void 0:e.locale)?void 0:n.options)?void 0:r.firstWeekContainsDate)??i.firstWeekContainsDate??(null==(o=null==(a=i.locale)?void 0:a.options)?void 0:o.firstWeekContainsDate)??1,c=D(t,e),h=s((null==e?void 0:e.in)||t,0);return h.setFullYear(c,0,u),h.setHours(0,0,0,0),l(h,e)}(n,e);return Math.round(r/o)+1}function C(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const T={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return C("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):C(n+1,2)},d:(t,e)=>C(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>C(t.getHours()%12||12,e.length),H:(t,e)=>C(t.getHours(),e.length),m:(t,e)=>C(t.getMinutes(),e.length),s:(t,e)=>C(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return C(Math.trunc(r*Math.pow(10,n-3)),e.length)}},Y="midnight",q="noon",O="morning",F="afternoon",E="evening",H="night",z={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return T.y(t,e)},Y:function(t,e,n,r){const a=D(t,r),o=a>0?a:1-a;if("YY"===e){return C(o%100,2)}return"Yo"===e?n.ordinalNumber(o,{unit:"year"}):C(o,e.length)},R:function(t,e){return C(m(t),e.length)},u:function(t,e){return C(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return C(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return C(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return C(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=W(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):C(a,e.length)},I:function(t,e,n){const r=N(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):C(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,n){const r=S(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):C(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return C(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return C(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return C(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?q:0===r?Y:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?E:r>=12?F:r>=4?O:H,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return T.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):C(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):C(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return L(r);case"XXXX":case"XX":return A(r);default:return A(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return L(r);case"xxxx":case"xx":return A(r);default:return A(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(r,":");default:return"GMT"+A(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(r,":");default:return"GMT"+A(r,":")}},t:function(t,e,n){return C(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return C(+t,e.length)}};function B(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+C(o,2)}function L(t,e){if(t%60==0){return(t>0?"-":"+")+C(Math.abs(t)/60,2)}return A(t,e)}function A(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+C(Math.trunc(r/60),2)+e+C(r%60,2)}const Q=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},G=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},X={p:G,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Q(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",Q(r,e)).replace("{{time}}",G(a,e))}},$=/^D+$/,J=/^Y+$/,_=["D","DD","YY","YYYY"];const I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,U=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,R=/''/g,K=/[a-zA-Z]/;function Z(t,e,n){var r,a,o,i;const s=d(),c=s.locale??P,l=s.firstWeekContainsDate??(null==(a=null==(r=s.locale)?void 0:r.options)?void 0:a.firstWeekContainsDate)??1,h=s.weekStartsOn??(null==(i=null==(o=s.locale)?void 0:o.options)?void 0:i.weekStartsOn)??0,m=u(t,null==n?void 0:n.in);if(!b(m))throw new RangeError("Invalid time value");let f=e.match(U).map((t=>{const e=t[0];if("p"===e||"P"===e){return(0,X[e])(t,c.formatLong)}return t})).join("").match(I).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:tt(t)};if(z[e])return{isToken:!0,value:t};if(e.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));c.localize.preprocessor&&(f=c.localize.preprocessor(m,f));const g={firstWeekContainsDate:l,weekStartsOn:h,locale:c};return f.map((n=>{if(!n.isToken)return n.value;const r=n.value;(function(t){return J.test(t)}(r)||function(t){return $.test(t)}(r))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(_.includes(t))throw new RangeError(r)}(r,e,String(t));return(0,z[r[0]])(m,r,c.localize,g)})).join("")}function tt(t){const e=t.match(V);return e?e[1].replace(R,"'"):t}const et={confirmed:"bg-green-100 text-green-800",pending:"bg-yellow-100 text-yellow-800",cancelled:"bg-red-100 text-red-800"};function nt({booking:e,userType:n,onStatusChange:r}){const a="provider"===n,o=a&&"pending"===e.status;return t.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[t.jsxs("div",{className:"flex justify-between items-start",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:a?e.client.full_name:e.provider.full_name}),t.jsx("p",{className:"text-sm text-gray-500",children:e.service.name})]}),t.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${et[e.status]}`,children:e.status.charAt(0).toUpperCase()+e.status.slice(1)})]}),t.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-gray-500",children:"Date"}),t.jsx("p",{className:"text-sm font-medium text-gray-900",children:Z(new Date(e.booking_date),"PPP")})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-gray-500",children:"Time"}),t.jsx("p",{className:"text-sm font-medium text-gray-900",children:Z(new Date(e.booking_date),"p")})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-gray-500",children:"Duration"}),t.jsxs("p",{className:"text-sm font-medium text-gray-900",children:[e.service.duration," minutes"]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-gray-500",children:"Price"}),t.jsxs("p",{className:"text-sm font-medium text-gray-900",children:["$",e.service.price]})]})]}),o&&t.jsxs("div",{className:"mt-6 flex space-x-3",children:[t.jsx("button",{onClick:()=>r(e.id,"confirmed"),className:"flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",children:"Confirm"}),t.jsx("button",{onClick:()=>r(e.id,"cancelled"),className:"flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",children:"Cancel"})]})]})}function rt(){return t.jsx("div",{className:"flex justify-center items-center min-h-screen",children:t.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"})})}function at({activeTab:e,setActiveTab:n}){return t.jsx("div",{className:"border-b border-gray-200 mb-8",children:t.jsxs("nav",{className:"-mb-px flex space-x-8",children:[t.jsx("button",{onClick:()=>n("upcoming"),className:("upcoming"===e?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300")+" whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",children:"Upcoming Bookings"}),t.jsx("button",{onClick:()=>n("past"),className:("past"===e?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300")+" whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",children:"Past Bookings"})]})})}function ot({activeTab:e}){return t.jsxs("div",{className:"text-center py-12",children:[t.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),t.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No bookings"}),t.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"upcoming"===e?"You don't have any upcoming bookings.":"You don't have any past bookings."})]})}function it(){const{user:o}=e(),[i,s]=n.useState([]),[u,c]=n.useState(!0),[d,l]=n.useState("upcoming"),[h,m]=n.useState(1),[f,g]=n.useState(!0),[w,b]=n.useState(!1),y=n.useRef(),x=n.useCallback((t=>{u||(y.current&&y.current.disconnect(),y.current=new IntersectionObserver((t=>{t[0].isIntersecting&&f&&!w&&m((t=>t+1))})),t&&y.current.observe(t))}),[u,f,w]),p=n.useCallback((async()=>{const t=new AbortController;try{b(!0);const{data:t,error:e,count:n}=await r.getBookings(o.id,o.user_type,d,h,10);if(e)throw e;s(1===h?t||[]:e=>[...e,...t||[]]),g(10===(t||[]).length)}catch(e){"AbortError"===!e.name&&a.error(e.message||"Failed to load bookings")}finally{c(!1),b(!1)}return()=>t.abort()}),[o,d,h]);n.useEffect((()=>{m(1),s([]),p()}),[d]),n.useEffect((()=>{h>1&&p()}),[h]);const v=async(t,e)=>{try{const{error:n}=await r.updateStatus(t,e);if(n)throw n;a.success(`Booking ${e}`),m(1),s([]),p()}catch(n){a.error(n.message||"Status update failed")}},M=n.useMemo((()=>i.filter((t=>"upcoming"===d?new Date(t.booking_date)>=new Date:new Date(t.booking_date)<new Date))),[i,d]);return u&&1===h?t.jsx(rt,{}):t.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[t.jsx("h1",{className:"text-3xl font-bold mb-8",children:"My Bookings"}),t.jsx(at,{activeTab:d,setActiveTab:l}),0===M.length?t.jsx(ot,{activeTab:d}):t.jsxs("div",{className:"space-y-6",children:[M.map(((e,n)=>t.jsx("div",{ref:n===M.length-1?x:null,children:t.jsx(nt,{booking:e,userType:o.user_type,onStatusChange:v})},e.id))),w&&t.jsx("div",{className:"flex justify-center py-4",children:t.jsx(rt,{})})]})]})}export{it as default};
