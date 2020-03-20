#include<stdio.h>

main()
{
    float x1, x2;
    float peso1, peso2;
    int resp;
    float s;
    float y1;
    float y2;

    printf("Informe o primeira entrada  ");
    scanf("%f", &x1);
    printf("Informe a segunda entrada ");
    scanf("%f", &x2);
    printf("Informe o primeiro peso ");
    scanf("%f", &peso1);
    printf("Informe o segundo peso ");
    scanf("%f", &peso2);
    printf("Digite 1 para Limite rapido, digite 2 para funcao rampa e 3 para funcao sigmoide");
        scanf("%d", &resp);

    s = (x1 * peso1) + (x2 * peso2);
    y1 = 1 - 1 / (1 + s);
    y2 = -1 + 1 / (1 - s);
    switch (resp)
    {
    case 1:
        if (s > 0)
            printf("y = 1");
        else
            printf("y = -1");
        break;

    case 2:
        if (s < 0)
            printf("y = 0");
        if (s >= 0 && s <= 1)
            printf("y = %f", s);
        else
            printf("y = 1");
        break;

    case 3:
        if (s >= 0)
            printf("y = %f", y1);
        else
            printf("y = %f", y2);
    }
}