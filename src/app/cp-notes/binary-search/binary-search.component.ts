import { Component } from '@angular/core';

@Component({
  templateUrl: 'binary-search.component.html',
  styleUrls: ['./binary-search.component.css']
})
export class CpBinarySearchComponent{
  discrete_ternary_search_code = `
    while(L < R) {
        int M = L + (R - L)/2;
        if( A[M] > A[mid+1] ){
            R = M;
        }else{
            L = M+1;
        }
    }
  `
  golden_section_search_code = `
    double inv_phi = 0.618033989;
    
    double calc_b(double L, double R){
        return R - (R - L) * inv_phi;
    }

    double calc_c(double L, double R){
        return L + (R - L) * inv_phi;
    }

    while((c - b) > eps){
        if(f1 < f2){
            a = b;
            b = c;
            c = calc_c(a, d);
            f1 = f2;
            f2 = f(c);
        }else{
            d = c;
            c = b;
            b = calc_b(a, d);
            f2 = f1;
            f1 = f(b);
        }
    }
`
}