goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__33305_33778 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__33306_33779 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33305_33778,G__33306_33779) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33305_33778,G__33306_33779));
var G__33307_33780 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__33308_33781 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33309_33782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33310_33783 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33307_33780,G__33308_33781,G__33309_33782,G__33310_33783) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33307_33780,G__33308_33781,G__33309_33782,G__33310_33783));
var G__33311_33786 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__33312_33787 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33313_33788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__33314_33789 = (function (panel_width_PERCENT_,p__33315){
var vec__33316 = p__33315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33316,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33316,(1),null);
return (((function (){var G__33319 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__33319);
})() * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33311_33786,G__33312_33787,G__33313_33788,G__33314_33789) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33311_33786,G__33312_33787,G__33313_33788,G__33314_33789));
var G__33320_33790 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__33321_33791 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33322_33792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33323_33793 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33320_33790,G__33321_33791,G__33322_33792,G__33323_33793) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33320_33790,G__33321_33791,G__33322_33792,G__33323_33793));
var G__33324_33796 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__33325_33797 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33326_33798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__33327_33799 = (function (width,p__33328){
var vec__33329 = p__33328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33329,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33329,(1),null);
return ((function (){var G__33332 = (width / n);
return Math.ceil(G__33332);
})() * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33324_33796,G__33325_33797,G__33326_33798,G__33327_33799) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33324_33796,G__33325_33797,G__33326_33798,G__33327_33799));
var G__33333_33800 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__33334_33801 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33335_33802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33336_33803 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33333_33800,G__33334_33801,G__33335_33802,G__33336_33803) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33333_33800,G__33334_33801,G__33335_33802,G__33336_33803));
var G__33337_33804 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__33338_33805 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33339_33806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33340_33807 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33337_33804,G__33338_33805,G__33339_33806,G__33340_33807) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33337_33804,G__33338_33805,G__33339_33806,G__33340_33807));
var G__33341_33809 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__33342_33810 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33343_33811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33344_33812 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33341_33809,G__33342_33810,G__33343_33811,G__33344_33812) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33341_33809,G__33342_33810,G__33343_33811,G__33344_33812));
var G__33345_33813 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__33346_33814 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33347_33815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33348_33816 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33345_33813,G__33346_33814,G__33347_33815,G__33348_33816) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33345_33813,G__33346_33814,G__33347_33815,G__33348_33816));
var G__33349_33817 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__33350_33818 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33351_33819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33352_33820 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33349_33817,G__33350_33818,G__33351_33819,G__33352_33820) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33349_33817,G__33350_33818,G__33351_33819,G__33352_33820));
var G__33353_33821 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__33354_33822 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33355_33823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33356_33824 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33353_33821,G__33354_33822,G__33355_33823,G__33356_33824) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33353_33821,G__33354_33822,G__33355_33823,G__33356_33824));
var G__33357_33825 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__33358_33826 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33359_33827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33360_33828 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33357_33825,G__33358_33826,G__33359_33827,G__33360_33828) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33357_33825,G__33358_33826,G__33359_33827,G__33360_33828));
var G__33361_33829 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__33362_33830 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33363_33831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__33364_33832 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33361_33829,G__33362_33830,G__33363_33831,G__33364_33832) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33361_33829,G__33362_33830,G__33363_33831,G__33364_33832));
var G__33365_33833 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__33366_33834 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33365_33833,G__33366_33834) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33365_33833,G__33366_33834));
var G__33367_33835 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__33368_33836 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33369_33837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__33370_33838 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33367_33835,G__33368_33836,G__33369_33837,G__33370_33838) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33367_33835,G__33368_33836,G__33369_33837,G__33370_33838));
var G__33371_33839 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__33372_33840 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33373_33841 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__33374_33842 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33371_33839,G__33372_33840,G__33373_33841,G__33374_33842) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33371_33839,G__33372_33840,G__33373_33841,G__33374_33842));
var G__33376_33845 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__33377_33847 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33378_33848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__33379_33849 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33375_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__33375_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__33375_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33376_33845,G__33377_33847,G__33378_33848,G__33379_33849) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33376_33845,G__33377_33847,G__33378_33848,G__33379_33849));
var G__33380_33852 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__33381_33853 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33382_33854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__33383_33855 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33380_33852,G__33381_33853,G__33382_33854,G__33383_33855) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33380_33852,G__33381_33853,G__33382_33854,G__33383_33855));
var G__33384_33856 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__33385_33857 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33386_33858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__33387_33859 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33384_33856,G__33385_33857,G__33386_33858,G__33387_33859) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33384_33856,G__33385_33857,G__33386_33858,G__33387_33859));
var G__33388_33860 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__33389_33861 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33390_33862 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__33391_33863 = (function (expansions,p__33392){
var vec__33393 = p__33392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33393,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33393,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33388_33860,G__33389_33861,G__33390_33862,G__33391_33863) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33388_33860,G__33389_33861,G__33390_33862,G__33391_33863));
var G__33396_33864 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__33397_33865 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33398_33866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__33399_33867 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33396_33864,G__33397_33865,G__33398_33866,G__33399_33867) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33396_33864,G__33397_33865,G__33398_33866,G__33399_33867));
var G__33400_33868 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__33401_33869 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33400_33868,G__33401_33869) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33400_33868,G__33401_33869));
var G__33402_33870 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__33403_33871 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33402_33870,G__33403_33871) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33402_33870,G__33403_33871));
var G__33404_33872 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__33405_33873 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33404_33872,G__33405_33873) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33404_33872,G__33405_33873));
var G__33406_33878 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__33407_33879 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33406_33878,G__33407_33879) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33406_33878,G__33407_33879));
var G__33408_33880 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__33409_33881 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33408_33880,G__33409_33881) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33408_33880,G__33409_33881));
var G__33410_33882 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__33411_33883 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33412_33884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__33413_33885 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33410_33882,G__33411_33883,G__33412_33884,G__33413_33885) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33410_33882,G__33411_33883,G__33412_33884,G__33413_33885));
var G__33414_33886 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__33415_33887 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33416_33888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__33417_33889 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33414_33886,G__33415_33887,G__33416_33888,G__33417_33889) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33414_33886,G__33415_33887,G__33416_33888,G__33417_33889));
var G__33418_33890 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__33419_33891 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33420_33892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__33421_33893 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33422_33894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__33423_33895 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33424_33896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__33425_33897 = (function (p__33426,_){
var vec__33427 = p__33426;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__33418_33890,G__33419_33891,G__33420_33892,G__33421_33893,G__33422_33894,G__33423_33895,G__33424_33896,G__33425_33897) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33418_33890,G__33419_33891,G__33420_33892,G__33421_33893,G__33422_33894,G__33423_33895,G__33424_33896,G__33425_33897));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__33430,_){
var vec__33431 = p__33430;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33431,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33431,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__33434_33900 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__33435_33901 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33436_33902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__33437_33903 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33438_33904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__33439_33905 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33434_33900,G__33435_33901,G__33436_33902,G__33437_33903,G__33438_33904,G__33439_33905) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33434_33900,G__33435_33901,G__33436_33902,G__33437_33903,G__33438_33904,G__33439_33905));
var G__33440_33907 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__33441_33908 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33442_33909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__33443_33910 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33444_33911 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__33445_33912 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33440_33907,G__33441_33908,G__33442_33909,G__33443_33910,G__33444_33911,G__33445_33912) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33440_33907,G__33441_33908,G__33442_33909,G__33443_33910,G__33444_33911,G__33445_33912));
var G__33446_33913 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__33447_33914 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33448_33915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__33449_33916 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33446_33913,G__33447_33914,G__33448_33915,G__33449_33916) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33446_33913,G__33447_33914,G__33448_33915,G__33449_33916));
var G__33450_33917 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__33451_33918 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33450_33917,G__33451_33918) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33450_33917,G__33451_33918));
var G__33452_33919 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__33453_33920 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33452_33919,G__33453_33920) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33452_33919,G__33453_33920));
var G__33454_33921 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__33455_33922 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33456_33923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__33457_33924 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33454_33921,G__33455_33922,G__33456_33923,G__33457_33924) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33454_33921,G__33455_33922,G__33456_33923,G__33457_33924));
var G__33458_33925 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__33459_33926 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33458_33925,G__33459_33926) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33458_33925,G__33459_33926));
var G__33460_33929 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__33461_33930 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33462_33931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__33463_33932 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33460_33929,G__33461_33930,G__33462_33931,G__33463_33932) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33460_33929,G__33461_33930,G__33462_33931,G__33463_33932));
var G__33464_33933 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__33465_33934 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33466_33935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__33467_33936 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33468_33937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__33469_33938 = (function (p__33470,_){
var vec__33471 = p__33470;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33471,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33471,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33464_33933,G__33465_33934,G__33466_33935,G__33467_33936,G__33468_33937,G__33469_33938) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33464_33933,G__33465_33934,G__33466_33935,G__33467_33936,G__33468_33937,G__33469_33938));
var G__33474_33940 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__33475_33941 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33476_33942 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__33477_33943 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33474_33940,G__33475_33941,G__33476_33942,G__33477_33943) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33474_33940,G__33475_33941,G__33476_33942,G__33477_33943));
var G__33478_33944 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__33479_33945 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33480_33946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__33481_33947 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33478_33944,G__33479_33945,G__33480_33946,G__33481_33947) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33478_33944,G__33479_33945,G__33480_33946,G__33481_33947));
var G__33482_33950 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__33483_33951 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33484_33952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__33485_33953 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33482_33950,G__33483_33951,G__33484_33952,G__33485_33953) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33482_33950,G__33483_33951,G__33484_33952,G__33485_33953));
var G__33486_33955 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__33487_33956 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33488_33957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__33489_33958 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33486_33955,G__33487_33956,G__33488_33957,G__33489_33958) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33486_33955,G__33487_33956,G__33488_33957,G__33489_33958));
var G__33490_33959 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__33491_33960 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33492_33961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__33493_33962 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33490_33959,G__33491_33960,G__33492_33961,G__33493_33962) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33490_33959,G__33491_33960,G__33492_33961,G__33493_33962));
var G__33494_33965 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__33495_33966 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33496_33967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__33497_33968 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33494_33965,G__33495_33966,G__33496_33967,G__33497_33968) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33494_33965,G__33495_33966,G__33496_33967,G__33497_33968));
var G__33498_33970 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__33499_33971 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33500_33972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__33501_33973 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33498_33970,G__33499_33971,G__33500_33972,G__33501_33973) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33498_33970,G__33499_33971,G__33500_33972,G__33501_33973));
var G__33502_33974 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__33503_33975 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33504_33976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__33505_33977 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33502_33974,G__33503_33975,G__33504_33976,G__33505_33977) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33502_33974,G__33503_33975,G__33504_33976,G__33505_33977));
var G__33506_33978 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__33507_33979 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33508_33980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__33509_33981 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33506_33978,G__33507_33979,G__33508_33980,G__33509_33981) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33506_33978,G__33507_33979,G__33508_33980,G__33509_33981));
var G__33510_33982 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__33511_33983 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33512_33984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__33513_33985 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33514_33986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__33515_33987 = (function (p__33516){
var vec__33517 = p__33516;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33510_33982,G__33511_33983,G__33512_33984,G__33513_33985,G__33514_33986,G__33515_33987) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33510_33982,G__33511_33983,G__33512_33984,G__33513_33985,G__33514_33986,G__33515_33987));
var G__33520_33988 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__33521_33989 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33522_33990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__33523_33991 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33524_33992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__33525_33993 = (function (p__33526){
var vec__33527 = p__33526;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33527,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33527,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33520_33988,G__33521_33989,G__33522_33990,G__33523_33991,G__33524_33992,G__33525_33993) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33520_33988,G__33521_33989,G__33522_33990,G__33523_33991,G__33524_33992,G__33525_33993));
var G__33530_33994 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__33531_33995 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33532_33996 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__33533_33997 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33530_33994,G__33531_33995,G__33532_33996,G__33533_33997) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33530_33994,G__33531_33995,G__33532_33996,G__33533_33997));
var G__33535_34000 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__33536_34001 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33537_34002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__33538_34003 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33534_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__33534_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__33534_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33535_34000,G__33536_34001,G__33537_34002,G__33538_34003) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33535_34000,G__33536_34001,G__33537_34002,G__33538_34003));
var G__33539_34005 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__33540_34006 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33541_34007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__33542_34008 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33539_34005,G__33540_34006,G__33541_34007,G__33542_34008) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33539_34005,G__33540_34006,G__33541_34007,G__33542_34008));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__33547 = arguments.length;
switch (G__33547) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___34010 = arguments.length;
var i__4790__auto___34011 = (0);
while(true){
if((i__4790__auto___34011 < len__4789__auto___34010)){
args_arr__4810__auto__.push((arguments[i__4790__auto___34011]));

var G__34012 = (i__4790__auto___34011 + (1));
i__4790__auto___34011 = G__34012;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq33544){
var G__33545 = cljs.core.first(seq33544);
var seq33544__$1 = cljs.core.next(seq33544);
var G__33546 = cljs.core.first(seq33544__$1);
var seq33544__$2 = cljs.core.next(seq33544__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33545,G__33546,seq33544__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__33548_34013 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__33549_34014 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33550_34015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__33551_34016 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33552_34017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__33553_34018 = (function (p__33554,p__33555){
var vec__33556 = p__33554;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33556,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33556,(1),null);
var vec__33559 = p__33555;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33559,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33559,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__33562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33548_34013,G__33549_34014,G__33550_34015,G__33551_34016,G__33552_34017,G__33553_34018) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33548_34013,G__33549_34014,G__33550_34015,G__33551_34016,G__33552_34017,G__33553_34018));
var G__33565_34019 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__33566_34020 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33567_34021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__33568_34022 = (function (match){
var map__33569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__33569__$1 = (((((!((map__33569 == null))))?(((((map__33569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33569):map__33569);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33565_34019,G__33566_34020,G__33567_34021,G__33568_34022) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33565_34019,G__33566_34020,G__33567_34021,G__33568_34022));
var G__33571_34023 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__33572_34024 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33573_34025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__33574_34026 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33571_34023,G__33572_34024,G__33573_34025,G__33574_34026) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33571_34023,G__33572_34024,G__33573_34025,G__33574_34026));
var G__33575_34027 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__33576_34028 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33577_34029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__33578_34030 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33575_34027,G__33576_34028,G__33577_34029,G__33578_34030) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33575_34027,G__33576_34028,G__33577_34029,G__33578_34030));
var G__33579_34031 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__33580_34032 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33579_34031,G__33580_34032) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33579_34031,G__33580_34032));
var G__33581_34033 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__33582_34034 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33583_34035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__33584_34036 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33581_34033,G__33582_34034,G__33583_34035,G__33584_34036) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33581_34033,G__33582_34034,G__33583_34035,G__33584_34036));
var G__33585_34037 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__33586_34038 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33587_34039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__33588_34040 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33585_34037,G__33586_34038,G__33587_34039,G__33588_34040) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33585_34037,G__33586_34038,G__33587_34039,G__33588_34040));
var G__33589_34041 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__33590_34042 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33591_34043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__33592_34044 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33589_34041,G__33590_34042,G__33591_34043,G__33592_34044) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33589_34041,G__33590_34042,G__33591_34043,G__33592_34044));
var G__33593_34045 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__33594_34046 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33595_34047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__33596_34048 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33593_34045,G__33594_34046,G__33595_34047,G__33596_34048) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33593_34045,G__33594_34046,G__33595_34047,G__33596_34048));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__33597_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__33597_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__33598){
return cljs.core.coll_QMARK_(G__33598);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__33599){
return cljs.core.map_QMARK_(G__33599);
}),(function (G__33599){
return cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__33599){
return cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__33599){
return cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__33599){
return cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__33599){
return cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__33599){
return cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__33599){
return ((cljs.core.map_QMARK_(G__33599)) && (cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__33599,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__33606){
return cljs.core.coll_QMARK_(G__33606);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__33607 = sub_type;
var G__33607__$1 = (((G__33607 instanceof cljs.core.Keyword))?G__33607.fqn:null);
switch (G__33607__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__34050 = (exp - (1));
var G__34051 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__34052 = cljs.core.rest(order__$1);
exp = G__34050;
total = G__34051;
order__$1 = G__34052;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__33608 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__33608__$1 = (((G__33608 instanceof cljs.core.Keyword))?G__33608.fqn:null);
switch (G__33608__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__33610,p__33611){
var vec__33612 = p__33610;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33612,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33612,(1),null);
var vec__33615 = p__33611;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33615,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me__$1){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me__$1)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me__$1){
var state = cljs.core.val(me__$1);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me__$1),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__33630_34058 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__33631_34059 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33632_34060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__33633_34061 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33630_34058,G__33631_34059,G__33632_34060,G__33633_34061) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33630_34058,G__33631_34059,G__33632_34060,G__33633_34061));
var G__33634_34062 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__33635_34063 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33636_34064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__33637_34065 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33634_34062,G__33635_34063,G__33636_34064,G__33637_34065) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33634_34062,G__33635_34063,G__33636_34064,G__33637_34065));
var G__33638_34066 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__33639_34067 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33640_34068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__33641_34069 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33642_34070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__33643_34071 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33638_34066,G__33639_34067,G__33640_34068,G__33641_34069,G__33642_34070,G__33643_34071) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33638_34066,G__33639_34067,G__33640_34068,G__33641_34069,G__33642_34070,G__33643_34071));
var G__33644_34074 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__33645_34075 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33646_34076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__33647_34077 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33648_34078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__33649_34079 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33644_34074,G__33645_34075,G__33646_34076,G__33647_34077,G__33648_34078,G__33649_34079) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33644_34074,G__33645_34075,G__33646_34076,G__33647_34077,G__33648_34078,G__33649_34079));
var G__33650_34080 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__33651_34081 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33652_34082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__33653_34083 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33650_34080,G__33651_34081,G__33652_34082,G__33653_34083) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33650_34080,G__33651_34081,G__33652_34082,G__33653_34083));
var G__33654_34084 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__33655_34085 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33656_34086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__33657_34087 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33658_34088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__33659_34089 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33660_34090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__33661_34091 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33662_34092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__33663_34093 = (function (p__33664){
var vec__33665 = p__33664;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33665,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33665,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33665,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33665,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__33668 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__33668__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__33668):G__33668);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__33669){
var map__33670 = p__33669;
var map__33670__$1 = (((((!((map__33670 == null))))?(((((map__33670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33670):map__33670);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__33668__$1);
} else {
return G__33668__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__33654_34084,G__33655_34085,G__33656_34086,G__33657_34087,G__33658_34088,G__33659_34089,G__33660_34090,G__33661_34091,G__33662_34092,G__33663_34093) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33654_34084,G__33655_34085,G__33656_34086,G__33657_34087,G__33658_34088,G__33659_34089,G__33660_34090,G__33661_34091,G__33662_34092,G__33663_34093));
var G__33672_34098 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__33673_34099 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33674_34100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__33675_34101 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33672_34098,G__33673_34099,G__33674_34100,G__33675_34101) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33672_34098,G__33673_34099,G__33674_34100,G__33675_34101));
var G__33676_34102 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__33677_34103 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33678_34104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__33679_34105 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33676_34102,G__33677_34103,G__33678_34104,G__33679_34105) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33676_34102,G__33677_34103,G__33678_34104,G__33679_34105));
var G__33680_34107 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__33681_34108 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33682_34109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__33683_34110 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33680_34107,G__33681_34108,G__33682_34109,G__33683_34110) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33680_34107,G__33681_34108,G__33682_34109,G__33683_34110));
var G__33684_34112 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__33685_34113 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33686_34114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__33687_34115 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33684_34112,G__33685_34113,G__33686_34114,G__33687_34115) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33684_34112,G__33685_34113,G__33686_34114,G__33687_34115));
var G__33688_34116 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__33689_34117 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33690_34118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__33691_34119 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33688_34116,G__33689_34117,G__33690_34118,G__33691_34119) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33688_34116,G__33689_34117,G__33690_34118,G__33691_34119));
var G__33692_34120 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__33693_34121 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33694_34122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__33695_34123 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33692_34120,G__33693_34121,G__33694_34122,G__33695_34123) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33692_34120,G__33693_34121,G__33694_34122,G__33695_34123));
var G__33696_34125 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__33697_34126 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33698_34127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__33699_34128 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33696_34125,G__33697_34126,G__33698_34127,G__33699_34128) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33696_34125,G__33697_34126,G__33698_34127,G__33699_34128));
var G__33700_34133 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__33701_34134 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33702_34135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__33703_34136 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33700_34133,G__33701_34134,G__33702_34135,G__33703_34136) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33700_34133,G__33701_34134,G__33702_34135,G__33703_34136));
var G__33704_34137 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__33705_34138 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33706_34139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__33707_34140 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33704_34137,G__33705_34138,G__33706_34139,G__33707_34140) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33704_34137,G__33705_34138,G__33706_34139,G__33707_34140));
var G__33708_34142 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__33709_34143 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33708_34142,G__33709_34143) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33708_34142,G__33709_34143));
var G__33710_34144 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__33711_34145 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33712_34146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__33713_34147 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33710_34144,G__33711_34145,G__33712_34146,G__33713_34147) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33710_34144,G__33711_34145,G__33712_34146,G__33713_34147));
var G__33714_34152 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__33715_34153 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33716_34154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__33717_34155 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33714_34152,G__33715_34153,G__33716_34154,G__33717_34155) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33714_34152,G__33715_34153,G__33716_34154,G__33717_34155));
var G__33721_34157 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__33722_34158 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33723_34159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__33724_34160 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33721_34157,G__33722_34158,G__33723_34159,G__33724_34160) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33721_34157,G__33722_34158,G__33723_34159,G__33724_34160));
var G__33725_34161 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__33726_34162 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33727_34163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__33728_34164 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33725_34161,G__33726_34162,G__33727_34163,G__33728_34164) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33725_34161,G__33726_34162,G__33727_34163,G__33728_34164));
var G__33729_34166 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__33730_34167 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33731_34168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__33732_34169 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33729_34166,G__33730_34167,G__33731_34168,G__33732_34169) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33729_34166,G__33730_34167,G__33731_34168,G__33732_34169));
var G__33733_34170 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__33734_34171 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33735_34172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__33736_34173 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33733_34170,G__33734_34171,G__33735_34172,G__33736_34173) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33733_34170,G__33734_34171,G__33735_34172,G__33736_34173));
var G__33737_34175 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__33738_34176 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33739_34177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__33740_34178 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33737_34175,G__33738_34176,G__33739_34177,G__33740_34178) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33737_34175,G__33738_34176,G__33739_34177,G__33740_34178));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__33743_34179 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__33744_34180 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33743_34179,G__33744_34180) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33743_34179,G__33744_34180));
var G__33747_34181 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__33748_34182 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33749_34183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__33750_34184 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33751_34185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__33752_34186 = (function (p__33753,_){
var vec__33754 = p__33753;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(1),null);
var G__33759 = (window_width / char_width);
return Math.ceil(G__33759);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__33747_34181,G__33748_34182,G__33749_34183,G__33750_34184,G__33751_34185,G__33752_34186) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33747_34181,G__33748_34182,G__33749_34183,G__33750_34184,G__33751_34185,G__33752_34186));
var G__33760_34193 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__33761_34194 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33760_34193,G__33761_34194) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33760_34193,G__33761_34194));
var G__33762_34200 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__33763_34201 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33764_34202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__33765_34203 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33762_34200,G__33763_34201,G__33764_34202,G__33765_34203) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33762_34200,G__33763_34201,G__33764_34202,G__33765_34203));
var G__33766_34211 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__33767_34212 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33766_34211,G__33767_34212) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33766_34211,G__33767_34212));
var G__33768_34218 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__33769_34219 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33770_34220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__33771_34221 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33768_34218,G__33769_34219,G__33770_34220,G__33771_34221) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33768_34218,G__33769_34219,G__33770_34220,G__33771_34221));
var G__33774_34223 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__33775_34224 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33774_34223,G__33775_34224) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__33774_34223,G__33775_34224));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
