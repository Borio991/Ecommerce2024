using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDTO>> GetBasket()
        {
            var basket = await _context.Baskets
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
                if(basket == null) return NotFound();
                var basketToReturn = MapBasketToDTO(basket);
                return basketToReturn;
        }

        [HttpPost]
        public async Task<ActionResult<BasketDTO>> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetriveBasket();
            if (basket == null) basket = CreateBasket();
            var product = await _context.Products.FindAsync(productId);

            if (product == null) return NotFound();

            basket.AddItem(product, quantity);
            var result = await _context.SaveChangesAsync() > 0;
            if (result)  return CreatedAtRoute("GetBasket", MapBasketToDTO(basket));
            return BadRequest(new ProblemDetails { Title = "Problem saving item to basket" });
           
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId,int quantity)
        {
            var basket = await RetriveBasket();
            if (basket == null) return NotFound();
            if (basket.Items.All(x => x.ProductId != productId)) return NotFound();
            basket.RemoveItem(productId, quantity);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem removing item from basket" });
        }



        // Retrieves a basket from the database based on the buyer's ID stored in the request cookies
        // and includes the associated items and products. Returns a Task<Basket>.
        private async Task<Basket> RetriveBasket()
        {
            var basket = await _context.Baskets
            .Include(x => x.Items)
            .ThenInclude(x => x.Product)
            .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
            return basket;
        }

        private Basket CreateBasket(){
            var buyerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions{IsEssential = true,Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("buyerId",buyerId,cookieOptions);
            var basket = new Basket(){BuyerId=buyerId};
            _context.Baskets.Add(basket);
            return basket;
        }

        private BasketDTO MapBasketToDTO(Basket basket)
        {
             var basketDto = new BasketDTO(){
                    BuyerId = basket.BuyerId,
                    Id = basket.Id,
                    Items = basket.Items.Select(item => new BasketItemDTO{
                        ProductId = item.ProductId,
                        Name = item.Product.Name,
                        Price = item.Product.Price,
                        Quantity = item.Quantity,
                        PictureUrl = item.Product.PictureUrl,
                        Brand = item.Product.Brand,
                        Type = item.Product.Type,
                    }).ToList()
                };
                return basketDto;
        }
        
    }
}