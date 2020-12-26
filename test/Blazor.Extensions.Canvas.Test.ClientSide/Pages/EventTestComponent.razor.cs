using Blazor.Extensions.Canvas.Canvas2D;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor.Extensions.Canvas.Test.ClientSide.Pages
{
    public partial class EventTestComponent : ComponentBase
    {
        private string _display = "nothing to display yet";

        private Canvas2DContext _context;

        protected BECanvasComponent _canvasReference;

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            this._context = await this._canvasReference.CreateCanvas2DAsync();
            
            await this._context.SetFillStyleAsync("green");
            await _context.FillRectAsync(0, 0, _canvasReference.Width, _canvasReference.Height);
            await this._context.SetFillStyleAsync("yellow");

            await this._context.FillRectAsync(10, 100, 100, 100);

            await this._context.SetFontAsync("48px serif");
            await this._context.StrokeTextAsync("Event test", 10, 100);
        }

        void MouseDownTest(MouseEventArgs e)
        {
            _display = $"Mouse button {e.Button} down at ({e.ClientX}|{e.ClientY})";
        }
    }
}
